import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./lang";
// 自动注入全局组件
import "./components";
// 样式重置 跨浏览器的高度一致性
import "normalize.css/normalize.css";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
