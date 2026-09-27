import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/articles/where-to-start-addiction-treatment",
        destination: "/articles/how-to-start-addiction-treatment",
        permanent: true,
      },
      {
        source: "/articles/family-support-substance-use",
        destination: "/articles/family-support-addiction",
        permanent: true,
      },
      {
        source: "/articles/what-is-relapse",
        destination: "/articles/addiction-relapse",
        permanent: true,
      },
      {
        source: "/doctors/dr-afsari",
        destination: "/doctors/dr-hashem-siadati",
        permanent: true,
      },
      {
        source: "/services/initial-assessment",
        destination: "/addiction-treatment-mashhad",
        permanent: true,
      },
      {
        source: "/services/addiction-consultation",
        destination: "/services/individual-counseling",
        permanent: true,
      },
      {
        source: "/services/psychology-services",
        destination: "/services/individual-counseling",
        permanent: true,
      },
      {
        source: "/services/family-counseling",
        destination: "/services/family-therapy",
        permanent: true,
      },
      {
        source: "/services/treatment-followup",
        destination: "/services/aftercare",
        permanent: true,
      },
      {
        source: "/services/relapse-prevention",
        destination: "/services/aftercare",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
