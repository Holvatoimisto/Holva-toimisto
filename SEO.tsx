import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
}

const BASE = "https://holvatoimisto.fi";
const DEFAULT_IMAGE = "/og-image.jpg";
const DEFAULT_DESC =
  "Rakennamme hyvinvointibrändeille verkkosivustoja, jotka tekevät ensivaikutelmasta selkeämmän ja yhteydenotosta helpompaa.";

export default function SEO({
  title,
  description = DEFAULT_DESC,
  ogImage = DEFAULT_IMAGE,
  canonical,
  noindex = false,
}: SEOProps) {
  const fullTitle = title
    ? `${title} | Holva Toimisto`
    : "Holva Toimisto | Premium verkkosivut hyvinvointibrändeille";
  const fullUrl = canonical ? `${BASE}${canonical}` : BASE;
  const fullImage = ogImage.startsWith("http") ? ogImage : `${BASE}${ogImage}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="fi_FI" />
      <meta property="og:site_name" content="Holva Toimisto" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImage} />
    </Helmet>
  );
}
