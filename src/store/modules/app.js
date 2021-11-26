/*
 * @Author: ay
 * @Date: 2021-09-30 14:11:42
 * @LastEditTime: 2021-11-25 14:41:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-basic-admin\src\store\modules\app.js
 */

import { GenerateRoutes } from "@/utils/app";
import { getMenuList } from "@/api/app";
import { title } from "@/config";
const app = {
  state: {
    title,
    menu: [],
  },
  getters: {},
  mutations: {
    SET_MENU: (state, menu) => {
      state.menu = menu;
    },
  },
  actions: {
    GetRoutes({ commit }) {
      return new Promise((resolve, reject) => {
        getMenuList()
          .then((res) => {
            console.log(res);
            let menu = GenerateRoutes(res.result);
            commit("SET_MENU", menu);
            resolve(menu);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
};

export default app;
