/*
 * @Author: ay
 * @Date: 2021-09-30 17:56:43
 * @LastEditTime: 2021-09-30 18:00:06
 * @LastEditors: Please set LastEditors
 * @Description: mock 本地模拟数据
 * @FilePath: \vue-basic-admin\src\mock\index.js
 */
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
    Mock.mock(new RegExp("^" + protocol[1]), protocol[0], target);
  }
});
