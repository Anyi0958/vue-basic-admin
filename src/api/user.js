/*
 * @Author: your name
 * @Date: 2021-10-03 22:11:55
 * @LastEditTime: 2021-10-05 18:27:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-basic-admin\src\api\user.js
 */
import { request } from "@/utils/request";

// 用户登录
export const UserLogin = (params) => {
  return request({
    method: "post",
    url: "/login",
    DataType: "form",
    params: params,
    HasToken: false,
  });
};

// 用户信息
export const UserInfo = () => {
  return request({
    method: "post",
    url: "/userInfo",
    HasToken: true,
  });
};
