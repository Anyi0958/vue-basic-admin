/*
 * @Author: ay
 * @Date: 2021-09-14 15:03:37
 * @LastEditTime: 2021-10-05 17:35:54
 * @LastEditors: Please set LastEditors
 * @Description: 全局配置
 * @FilePath: \vue-basic-admin\src\config\index.js
 */

module.exports = {
  title: "vue-basic-admin", // 标题
  defaultLang: "zh", // 语言类型 locales下的文件名 zh 中文 en 英文
  layoutUI: "antDesign", // ui 组件 antDesign elementUI
  production:
    process.env.NODE_ENV === "production" &&
    process.env.VUE_APP_PREVIEW !== "true", // 当前环境

  // request
  //  缓存 token 建
  tokenName: "accessToken",
  requestBase: "anitt",
  //  请求超时
  requestTimeout: 10 * 1000,
  //  请求数据类型
  requestDataType: {
    json: "application/json;charset=UTF-8",
    form: "application/x-www-form-urlencoded;charset=UTF-8",
    blob: "blob",
  },
  //  请求错误码
  requestErrorCode: {
    // 无权限
    401: "noPermissionCode",
    // 登录失效
    402: "invalidCode",
    // 未知错误
    500: "error",
  },
};
