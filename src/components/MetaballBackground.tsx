import { useRef, useEffect, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  uniform float u_count;

  float circle(in vec2 _st, in float _radius) {
    vec2 dist = _st - vec2(0.5);
    return 1. - smoothstep(
      _radius - (_radius * 0.01),
      _radius + (_radius * 0.01),
      dot(dist, dist) * 4.0
    );
  }

  float sdSphere(in vec3 p, in vec3 pos, in float radius) {
    return length(p - pos) - radius;
  }

  float opSmoothUnion(float d1, float d2, float k) {
    float h = clamp(0.5 + 0.5 * (d2 - d1) / k, 0.0, 1.0);
    return mix(d2, d1, h) - k * h * (1.0 - h);
  }

  void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st.x *= u_resolution.x / u_resolution.y;

    vec3 ro = vec3(0.0, 0.0, 2.5);
    vec3 rd = normalize(vec3(st - vec2(0.5 * u_resolution.x / u_resolution.y, 0.5), -1.0));
    vec3 lightPos = vec3(2.0, 2.0, 2.0);
    vec3 bgColor = vec3(0.043, 0.098, 0.161);
    vec3 color1 = vec3(0.78, 0.67, 0.29);
    vec3 color2 = vec3(0.65, 0.5, 0.2);
    vec3 finalColor = bgColor;
    float t = u_time;
    float orbitRadius = 0.8;
    float sphereRadius = 0.35;
    float blendK = 0.3;
    float mouseInfluence = 0.3;
    vec2 mouseNorm = (u_mouse / u_resolution - 0.5) * vec2(u_resolution.x / u_resolution.y, 1.0);

    vec3 p1 = vec3(cos(t * 0.7) * orbitRadius, sin(t * 0.5) * 0.5, sin(t * 0.7) * orbitRadius) + vec3(0.2) - vec3(mouseNorm * mouseInfluence, 0.0);
    vec3 p2 = vec3(cos(t * 0.5 + 2.09) * orbitRadius, sin(t * 0.3 + 1.047) * 0.5, sin(t * 0.6 + 2.09) * orbitRadius) - vec3(0.3, 0.1, 0.2) - vec3(mouseNorm * mouseInfluence * 0.8, 0.0);
    vec3 p3 = vec3(cos(t * 0.3 + 4.18) * orbitRadius * 0.8, sin(t * 0.4 + 3.14) * 0.4, sin(t * 0.5 + 4.18) * orbitRadius * 0.8) + vec3(0.1, -0.2, 0.3) - vec3(mouseNorm * mouseInfluence * 0.6, 0.0);
    vec3 p4 = vec3(cos(t * 0.9) * orbitRadius * 0.6, sin(t * 0.7) * 0.3, sin(t * 0.8) * orbitRadius * 0.6) - vec3(0.2, 0.2, -0.1) - vec3(mouseNorm * mouseInfluence * 0.7, 0.0);
    vec3 p5 = vec3(cos(t * 0.4 + 1.0) * orbitRadius * 0.5, sin(t * 0.6 + 2.0) * 0.6, sin(t * 0.45 + 3.0) * orbitRadius * 0.5) + vec3(0.3, 0.15, -0.2) - vec3(mouseNorm * mouseInfluence * 0.5, 0.0);

    float d = 0.0;
    for (int i = 0; i < 64; i++) {
      if (d > 5.0) break;
      vec3 p = ro + rd * d;
      float s1 = sdSphere(p, p1, sphereRadius);
      float s2 = sdSphere(p, p2, sphereRadius);
      float s3 = sdSphere(p, p3, sphereRadius);
      float s4 = sdSphere(p, p4, sphereRadius);
      float s5 = sdSphere(p, p5, sphereRadius);
      float dS = opSmoothUnion(s1, s2, blendK);
      dS = opSmoothUnion(dS, s3, blendK);
      dS = opSmoothUnion(dS, s4, blendK);
      dS = opSmoothUnion(dS, s5, blendK);
      d += dS * 0.5;
      if (dS < 0.005) break;
    }

    if (d < 5.0) {
      vec3 p = ro + rd * d;
      vec3 normal = normalize(p - p1);
      vec3 lightDir = normalize(lightPos - p);
      float diff = max(dot(normal, lightDir), 0.0);
      float ambient = 0.3;
      float hueShift = sin(t * 0.3) * 0.1;
      vec3 blobColor = mix(color1, color2, 0.5 + hueShift);
      vec3 viewDir = normalize(ro - p);
      vec3 halfVec = normalize(lightDir + viewDir);
      float spec = pow(max(dot(normal, halfVec), 0.0), 32.0);
      finalColor = blobColor * (diff + ambient) + vec3(1.0) * spec * 0.5;
    }

    gl_FragColor = vec4(finalColor, 1.0);
    #include <colorspace_fragment>
  }
`;

function MetaballMesh() {
  const shaderRef = useRef<THREE.ShaderMaterial>(null);
  const mouseTarget = useRef({ x: 0, y: 0 });
  const { size, gl } = useThree();

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_resolution: {
        value: new THREE.Vector2(window.innerWidth, window.innerHeight),
      },
      u_mouse: { value: new THREE.Vector2(0, 0) },
      u_count: { value: 5 },
    }),
    []
  );

  useFrame((_, delta) => {
    const material = shaderRef.current;
    if (!material) return;
    material.uniforms.u_time.value += delta;
    material.uniforms.u_mouse.value.x +=
      (mouseTarget.current.x - material.uniforms.u_mouse.value.x) * 0.1;
    material.uniforms.u_mouse.value.y +=
      (mouseTarget.current.y - material.uniforms.u_mouse.value.y) * 0.1;
    material.uniforms.u_count.value = 5;
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = gl.domElement.getBoundingClientRect();
      mouseTarget.current.x = e.clientX - rect.left;
      mouseTarget.current.y = rect.height - (e.clientY - rect.top);
    };
    gl.domElement.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });
    return () => {
      gl.domElement.removeEventListener("mousemove", handleMouseMove);
    };
  }, [gl]);

  useEffect(() => {
    if (shaderRef.current) {
      shaderRef.current.uniforms.u_resolution.value.set(size.width, size.height);
    }
  }, [size]);

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={shaderRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export default function MetaballBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    >
      <Canvas
        orthographic
        camera={{ left: -1, right: 1, top: 1, bottom: -1, near: 0, far: 1 }}
        gl={{ alpha: false }}
        dpr={[1, 2]}
        frameloop={visible ? "always" : "never"}
        style={{ width: "100%", height: "100%" }}
      >
        <MetaballMesh />
      </Canvas>
    </div>
  );
}


