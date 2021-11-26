/*
 * @Author: your name
 * @Date: 2021-11-23 16:11:01
 * @LastEditTime: 2021-11-25 16:11:24
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-basic-admin\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./lang";
// 自动注入全局组件
import "./components";
// 样式重置 跨浏览器的高度一致性
import "normalize.css/normalize.css";
// 本地模拟网络数据
// require("../mock");
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
