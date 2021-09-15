/*
 * @Author: ay
 * @Date: 2021-09-14 15:48:01
 * @LastEditTime: 2021-09-14 18:10:05
 * @LastEditors: Please set LastEditors
 * @Description: 自动构建全局组件
 * @FilePath: \vue-basic-admin\src\components\index.js
 */

import Vue from "vue";

// 自动获取 locales 下的文件
function autoLoadingGlobalComponent() {
  const global = require.context("./global", false, /[A-Za-z0-9-_,\s]+\.vue$/i);
  const components = {};
  global.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const componentName = matched[1];
      Vue.component(componentName, global(key).default);
    }
  });
  return components;
}

autoLoadingGlobalComponent();
