const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  productionSourceMap: false,
  devServer:{
    port: 6789,
  },
  publicPath: process.env.NODE_ENV === 'production'? './': '/'

})

