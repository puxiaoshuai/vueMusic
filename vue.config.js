const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const themrPath = path.join(__dirname, './src/theme.less')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            hack: `true; @import "${themrPath}"`
          }
        }
      }
    }
  }
})
