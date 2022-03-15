module.exports = {
  devServer: {
    port: 8080,
  },
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        const argz = args;
        argz[0].title = 'BRAND';
        return argz;
      });
  },
};
