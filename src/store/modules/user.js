/*
 * @Author: ay
 * @Date: 2021-09-30 14:15:31
 * @LastEditTime: 2021-10-05 21:25:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-basic-admin\src\store\modules\user.js
 */
import { UserLogin, UserInfo } from "@/api/user";
// eslint-disable-next-line no-unused-vars
import { setStore, getStore, removeStore, clearStore } from "@/utils/storage";
import { tokenName } from "@/config";
const user = {
  state: {
    token: getStore(tokenName),
    // 用户名
    nickName: "",
    // 头像
    avatar: "",
    // 角色
    roles: [],
    // 权限
    permissions: [],
  },
  getters: {},
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NICKNAME: (state, nickName) => {
      state.nickName = nickName;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions;
    },
  },
  actions: {
    // 用户登录
    Login({ commit, dispatch }, userInfo) {
      const username = userInfo.username ? userInfo.username.trim() : "";
      const password = userInfo.password;
      return new Promise((resolve, reject) => {
        UserLogin({
          username,
          password,
        })
          .then((res) => {
            if (res.code === 200 && res.success) {
              // 本地存储 token
              setStore(tokenName, res.result);
              commit("SET_TOKEN", res.result);
              // 获取用户基本信息
              dispatch("GetInfo");
            }
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 获取用户信息
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        UserInfo()
          .then((res) => {
            if (res.code === 200 && res.success) {
              const user = res.result;
              commit("SET_NICKNAME", user.nickName);
              commit("SET_AVATAR", user.avatar);
              commit("SET_ROLES", user.roles || []);
              commit("SET_PERMISSIONS", user.permissions || []);
            }
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    // 用户登出
    Logout({ commit }) {
      commit("SET_TOKEN", "");
      removeStore(tokenName);
    },
  },
};

export default user;
