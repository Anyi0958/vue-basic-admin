/*
 * @Author: your name
 * @Date: 2021-10-03 18:19:11
 * @LastEditTime: 2021-10-05 17:22:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-basic-admin\mock\index.js
 */

import { requestBase } from "@/config";

// 首先引入Mock
const Mock = require("mockjs");

// 设置拦截ajax请求的相应时间
Mock.setup({
  timeout: "200-600",
});

let configArray = [];

// 使用webpack的require.context()遍历所有mock文件
const files = require.context(".", true, /\.js$/);
files.keys().forEach((key) => {
  if (key === "./index.js") return;
  configArray = configArray.concat(files(key).default);
});

// 注册所有的mock服务
configArray.forEach((item) => {
  for (let [path, target] of Object.entries(item)) {
    let protocol = path.split("|");
    let url = new RegExp("^" + `${requestBase}${protocol[1]}`);
    let method = protocol[0];
    Mock.mock(url, method, target);
  }
});

// 解析post请求参数
export const bodyParmas = (options) => {
  const bodyString = (data) => {
    let params = {};
    data.split("&").map((item) => {
      let v = item.split("=");
      params[v[0]] = v[1];
    });
    return params;
  };

  let data = null;
  if (options.type === "POST") {
    options.body &&
      (data = options.body.includes("&")
        ? bodyString(options.body)
        : JSON.parse(options.body));
  } else if (
    ["DELETE", "GET"].includes(options.type) &&
    options.url.split("?").length > 1
  ) {
    data = bodyString(options.url.split("?")[1]);
  } else if (options.type === "PUT") {
    data = JSON.parse(options.body);
  }
  return data;
};
