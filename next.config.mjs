/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  distDir: "build",
  webpack(config) {
    config.module.rules.push({
      test: /\.(jsx|tsx)$/,
      exclude: [/node_modules/],
      use: [
        {
          loader: "@dhiwise/component-tagger/nextLoader",
        },
      ],
    });
    return config;
  },
};
export default nextConfig;
