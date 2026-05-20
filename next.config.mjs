const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: isGithubPages ? "/sneaker-trade-marketplace" : "",
  assetPrefix: isGithubPages ? "/sneaker-trade-marketplace/" : ""
};

export default nextConfig;
