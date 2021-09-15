/*
 * @Author: ay
 * @Date: 2021-09-14 15:03:37
 * @LastEditTime: 2021-09-14 18:32:37
 * @LastEditors: Please set LastEditors
 * @Description: 国际化语言
 * @FilePath: \vue-basic-admin\src\config\index.js
 */

import Vue from "vue";
import VueI18n from "vue-i18n";
import defaultSettings from "@/config";
Vue.use(VueI18n);

// 自动获取 locales 下的文件
function loadLocaleMessages() {
  const locales = require.context(
    "./locales",
    false,
    /[A-Za-z0-9-_,\s]+\.js$/i
  );

  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key).default;
    }
  });
  return messages;
}

const i18n = new VueI18n({
  silentTranslationWarn: false, // 是否取消本地化失败时输出的警告
  locale: defaultSettings.defaultLang, // 语言环境
  fallbackLocale: defaultSettings.defaultLang, // 预设的语言环境
  messages: loadLocaleMessages(), // 本地化的语言环境信息
});

export default i18n;
