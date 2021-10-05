import Vue from "vue";
import VueRouter from "vue-router";
// import store from "@/store";
// import { getStore } from "@/libs/storage";
// import { tokenName } from "@/config";
// 加载进度条
import nprogress from "nprogress";
import "nprogress/nprogress.css";
nprogress.configure({
  easing: "ease",
  speed: 500,
  trickleSpeed: 200,
  showSpinner: false,
});

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "Home",
    component: () =>
      import(/* webpackChunkName: "index" */ "@/layouts/index.vue"),
    children: [
      // 首页
      {
        path: "/home",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/Home.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

router.beforeEach((to, from, next) => {
  nprogress.start();
  console.log(router.app, to.name, to.params, to.query);
  next();
  // Util.title(to.meta.title);
  // var name = to.name;
  // if (Cookies.get('locking') == '1' && name !== 'locking') {
  //     // 判断当前是否是锁定状态
  //     next({
  //         replace: true,
  //         name: 'locking'
  //     });
  // } else if (Cookies.get('locking') == '0' && name == 'locking') {
  //     next(false);
  // } else {
  //     // 白名单
  //     var whiteList = name != 'login' && name != 'regist' && name != 'regist-result' && name != 'authorize';
  //     if (!Cookies.get('userInfo') && whiteList) {
  //         // 判断是否已经登录且前往的页面不是登录页
  //         next({
  //             name: 'login'
  //         });
  //     } else if (Cookies.get('userInfo') && name == 'login') {
  //         // 判断是否已经登录且前往的是登录页
  //         Util.title();
  //         next({
  //             name: 'home_index'
  //         });
  //     } else {
  //         Util.toDefaultPage([...routers], name, router, next);
  //     }
  // }
});

router.afterEach((to) => {
  console.log(router.app, to.name, to.params, to.query);
  nprogress.done();
  window.scrollTo(0, 0);
});
