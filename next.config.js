const isProd = process.env.NODE_ENV === "production";

module.exports = {
  basePath: isProd ? "/zapps/2928403159849082663" : undefined,
  assetPrefix: isProd ? "https://hieu24313.github.io/nextjs-mini" : undefined,
  output: 'export', // Thêm dòng này để hỗ trợ xuất tĩnh
};

