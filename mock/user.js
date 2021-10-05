/*
 * @Author: ay
 * @Date: 2021-10-03 22:02:29
 * @LastEditTime: 2021-10-05 21:25:25
 * @LastEditors: Please set LastEditors
 * @Description: 用户相关api
 * @FilePath: \vue-basic-admin\mock\user.js
 */
const Mock = require("mockjs");
import { bodyParmas } from "./index";

// 用户登录
let UserLogin = function (option) {
  const params = bodyParmas(option);
  if (params.username === "admin" && params.password === "admin") {
    return {
      code: 200,
      success: true,
      message: "登录成功",
      result: Mock.mock("@string(32)"),
    };
  } else {
    return {
      code: 500,
      success: false,
      message: "用户名或密码错误",
    };
  }
};

// 用户基本信息
let UserInfo = function () {
  return {
    code: 200,
    success: true,
    message: "",
    result: {
      // 用户名
      nickName: Mock.mock("@name"),
      // 头像
      avatar: "https://api.ixiaowai.cn/mcapi/mcapi.php",
      // 角色
      roles: ["admin", "user", "test"],
      // 权限
      permissions: ["add", "delete", "edit"],
    },
  };
  // }
};
export default {
  "post|/login": UserLogin,
  "post|/userInfo": UserInfo,
};
