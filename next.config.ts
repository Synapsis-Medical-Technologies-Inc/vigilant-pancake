const nextConfig = {
  output: "export",
  trailingSlash: false,
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "/Synapsis-Medical-Technologies-Inc/spyk-health-landing-page"
      : "",
  basePath:
    process.env.NODE_ENV === "production"
      ? "/Synapsis-Medical-Technologies-Inc/spyk-health-landing-page"
      : "",
  images: {
    unoptimized: true,
  },
  distDir: "build",
};

export default nextConfig;
