module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/frontend.scss";
        `
      }
    }
  },
  lintOnSave: true,
  chainWebpack: config => {
    config.module.rules.delete("eslint");
    config.plugins.delete("fork-ts-checker");
  },
  devServer: {
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
