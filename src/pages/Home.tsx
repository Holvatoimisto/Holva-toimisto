import HeroAndProblem from "@/sections/HeroAndProblem";
import HomeCaseStudies from "@/sections/HomeCaseStudies";
import DeeperInsight from "@/sections/DeeperInsight";
import Philosophy from "@/sections/Philosophy";
import Palvelut from "@/sections/Palvelut";
import Process from "@/sections/Process";
import FAQ from "@/sections/FAQ";
import Pricing from "@/sections/Pricing";
import Demo from "@/sections/Demo";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <div>
      <SEO canonical="/" />
      <HeroAndProblem />
      <DeeperInsight />
      <HomeCaseStudies />
      <Philosophy />
      <Palvelut />
      <Process />
      <FAQ />
      <Pricing />
      <Demo />
      <Footer />
    </div>
  );
}
