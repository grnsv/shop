module.exports = {
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
