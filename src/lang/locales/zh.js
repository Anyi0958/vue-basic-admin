// 自动获取 zh 下的文件
function loadLocaleMessages() {
  const locales = require.context("./zh", true, /[A-Za-z0-9-_,\s]+\.js$/i);
  let messages = {};
  locales.keys().forEach((key) => {
    messages = { ...messages, ...locales(key).default };
  });
  return messages;
}

export default {
  ...loadLocaleMessages(),
  lang: "中文",
  message: "消息 !!22",
};
