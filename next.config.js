const isProd = process.env.NODE_ENV === "production"

module.exports = {
  basePath: isProd ? "/zapps/2993963391728611626" : undefined,
  assetPrefix: isProd
    ? "https://hieu24313.github.io/nextjs-mini"
    : undefined,
    output: "export"
}
