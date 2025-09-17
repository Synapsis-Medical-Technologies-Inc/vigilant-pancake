const nextConfig = {
  output: "export",
  trailingSlash: false,
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "/Synapsis-Medical-Technologies-Inc/vigilant-pancake"
      : "",
  basePath:
    process.env.NODE_ENV === "production"
      ? "/Synapsis-Medical-Technologies-Inc/vigilant-pancake"
      : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
