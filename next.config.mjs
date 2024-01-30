import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // distDir: "./dist",

  experimental: {
    // typedRoutes: true,
  },
};

export default withNextIntl(nextConfig);
