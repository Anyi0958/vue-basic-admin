/*
 * @Author: your name
 * @Date: 2021-10-06 13:18:57
 * @LastEditTime: 2021-10-06 13:18:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-basic-admin\src\api\app.js
 */

import { request } from "@/utils/request";

// 生成路由
export const getMenuList = () => {
  return request({
    method: "post",
    url: "/getMenuList",
    HasToken: true,
  });
};
