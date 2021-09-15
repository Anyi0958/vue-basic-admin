// 自动获取 en 下的文件
function loadLocaleMessages() {
  const locales = require.context("./en", true, /[A-Za-z0-9-_,\s]+\.js$/i);
  let messages = {};
  locales.keys().forEach((key) => {
    messages = { ...messages, ...locales(key).default };
  });
  return messages;
}

export default {
  ...loadLocaleMessages(),
  lang: "English",
  message: "hello i18n !2131!",
};
