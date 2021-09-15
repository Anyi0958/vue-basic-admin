/*
 * @Author: ay
 * @Date: 2021-09-14 15:03:37
 * @LastEditTime: 2021-09-14 16:25:40
 * @LastEditors: Please set LastEditors
 * @Description: 全局配置
 * @FilePath: \vue-basic-admin\src\config\index.js
 */

export default {
  title: "vue-basic-admin", // 标题
  defaultLang: "en", // 语言类型 locales下的文件名 zh 中文 en 英文
  production:
    process.env.NODE_ENV === "production" &&
    process.env.VUE_APP_PREVIEW !== "true", // 当前环境
};
