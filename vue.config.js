/*
 * @Author: ay
 * @Date: 2021-09-14 14:34:02
 * @LastEditTime: 2021-09-15 14:09:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-basic-admin\vue.config.js
 */

const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack(config) {
    // 设置路径别名
    config.resolve.alias
      .set("@", resolve("src")) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set("@c", resolve("src/components"));
  },

  pluginOptions: {
    i18n: {
      localeDir: "locales",
      enableInSFC: false,
    },
  },
  /*  
    解决 antDesign less  
    .bezierEasingMixin();
    ^
    Inline JavaScript is not enabled. Is it set in your options? */
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
};
