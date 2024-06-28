const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/account": {
        target: "http://47.95.172.206:8080",
        changeOrigin: true
    }
  }
}
})
