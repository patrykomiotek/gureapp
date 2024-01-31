import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // distDir: "./dist",

  // poweredByHeader: false,

  experimental: {
    // typedRoutes: true,
  },

  // rewrites: /new-about -> /about
  async rewrites() {
    return [
      {
        source: "/new-about",
        destination: "/about",
      },
    ];
  },

  // redirect: /new-contact -> /contact
  async redirects() {
    return [
      {
        source: "/new-contact",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

// with next-intl
// export default withNextIntl(nextConfig);

export default nextConfig;
