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
  lintOnSave: false,
  chainWebpack: config => {
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
