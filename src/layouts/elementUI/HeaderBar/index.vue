<!--
 * @Author: your name
 * @Date: 2021-09-15 11:31:18
 * @LastEditTime: 2021-09-15 14:57:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-basic-admin\src\layouts\elementUI\HeaderBar\index.vue
-->
<template>
  <div>
    <el-button @click="open1">消息</el-button>
    <el-button @click="open2">成功</el-button>
    <el-button @click="open3">警告</el-button>
    <el-button @click="open4">错误</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    open1() {
      this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
    },

    open2() {
      this.$message({
        showClose: true,
        message: "恭喜你，这是一条成功消息",
        type: "success",
      });
    },

    open3() {
      this.$message({
        showClose: true,
        message: "警告哦，这是一条警告消息",
        type: "warning",
      });
    },

    open4() {
      this.$message({
        showClose: true,
        message: "错了哦，这是一条错误消息",
        type: "error",
      });
    },
  },
};
</script>
