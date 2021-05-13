module.exports = {
  devServer: {
    proxy: 'http://localhost:8080',
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
