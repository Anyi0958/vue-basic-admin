/*
 * @Author: ay
 * @Date: 2021-09-30 14:15:31
 * @LastEditTime: 2021-09-30 17:23:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-basic-admin\src\store\modules\user.js
 */

const user = {
  state: {
    token: "xxxxxxx",
    // 用户名
    nickName: "anitt",
    // 头像
    avatar: "https://api.ixiaowai.cn/mcapi/mcapi.php",
    // 角色
    roles: ["admin", "user", "test"],
    // 权限
    permissions: ["add", "delete", "edit"],
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
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim();
      const password = userInfo.password;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username === "admin" && password === "123456") {
          } else {
            reject("帐户或密码不正确!");
          }
        }, 1000);
      });
    },
    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        api.routers
          .getInfo()
          .then((res) => {
            const user = res.data.user;
            const avatar = "";
            if (res.data.roles && res.data.roles.length > 0) {
              // 验证返回的roles是否是一个非空数组
              commit("SET_ROLES", res.data.roles);
              commit("SET_PERMISSIONS", res.data.permissions);
            } else {
              commit("SET_ROLES", ["ROLE_DEFAULT"]);
            }
            commit("SET_NAME", user.userName);
            commit("SET_NICKNAME", user.nickName);
            commit("SET_EMAIL", user.email);

            commit("SET_AVATAR", avatar);
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
};

export default user;
