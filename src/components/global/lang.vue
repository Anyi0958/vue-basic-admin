<!--
 * @Author: ay
 * @Date: 2021-09-14 15:42:57
 * @LastEditTime: 2021-09-14 17:05:12
 * @LastEditors: Please set LastEditors
 * @Description: 语言类型切换
 * @FilePath: \vue-basic-admin\src\components\lang.vue
-->
<template>
  <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.value">
        {{ lang.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "locale-changer",
  data() {
    return {};
  },
  computed: {
    langs() {
      const locales = require.context(
        "@/lang/locales",
        false,
        /[A-Za-z0-9-_,\s]+\.js$/i
      );

      const messages = [];
      locales.keys().forEach((key) => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i);
        if (matched && matched.length > 1) {
          messages.push({
            label: locales(key).default.lang,
            value: matched[1],
          });
        }
      });
      return messages;
    },
  },
};
</script>
