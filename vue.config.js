const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port:8081,
    proxy: {
      "/api": {
        target: "http://localhost",
        changeOrigin: true,
        ws:true
    }
  }
}
})
