/*
 * @Author: your name
 * @Date: 2021-11-23 16:11:01
 * @LastEditTime: 2021-11-23 17:36:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-basic-admin\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import { getStore } from "@/utils/storage";
import { tokenName, nprogressConfig } from "@/config";
// 加载进度条
import nprogress from "nprogress";
import "nprogress/nprogress.css";
nprogress.configure({ ...nprogressConfig });

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
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "index" */ "@/views/login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

// 路由白名单
const whiteList = ["/login"];

router.beforeEach((to, from, next) => {
  nprogress.start();
  const token = getStore(tokenName);
  // 是否有token
  if (token) {
    if (to.path === "/login") {
      next({ path: "/home" });
      nprogress.done();
    } else {
      if (store.state.user.roles.length === 0) {
        // 判断当前用户是否已拉取完user_info信息
        store.dispatch("user/GetInfo").then(() => {
          store.dispatch("app/GetRoutes").then((accessRoutes) => {
            // 根据roles权限生成可访问的路由表
            router.addRoutes(accessRoutes); // 动态添加可访问路由表
            next({ ...to, replace: true }); // hack方法 确保addRoutes已完成
          });
        });
      } else {
        next();
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next();
    } else {
      next(`/login?redirect=${to.fullPath}`); // 否则全部重定向到登录页
      nprogress.done();
    }
  }
});

router.afterEach((to) => {
  console.log("=====路由后置=====", router.app, to.name, to.params, to.query);
  nprogress.done();
  window.scrollTo(0, 0);
});
