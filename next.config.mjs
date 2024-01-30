import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // distDir: "./dist",

  // poweredByHeader: false,

  experimental: {
    // typedRoutes: true,
  },

  // rewrites: /new-about -> /about
  // redirect: /about -> /new-about
};

// with next-intl
// export default withNextIntl(nextConfig);

export default nextConfig;
