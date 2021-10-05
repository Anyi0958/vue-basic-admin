<!--
 * @Author: ay
 * @Date: 2021-09-14 18:29:02
 * @LastEditTime: 2021-10-05 18:28:27
 * @LastEditors: Please set LastEditors
 * @Description: 自定义布局
 * @FilePath: \vue-basic-admin\src\views\layouts\index.vue
-->
<template>
  <div class="layout">
    <!-- 顶部菜单混合模式 -->
    <!-- <div class="layout1">
      <HeaderBar class="headerBar"></HeaderBar>
      <div class="body">
        <SideBar class="sideBar"></SideBar>
        <div class="content">
          <TagsBar></TagsBar>
          <router-view></router-view>
        </div>
      </div>
    </div> -->

    <!-- 左侧菜单混合模式 -->
    <div class="layout2">
      <SideBar class="sideBar"></SideBar>

      <div class="body">
        <HeaderBar class="headerBar"></HeaderBar>

        <div class="content">
          <TagsBar></TagsBar>
          <router-view></router-view>
        </div>
      </div>
    </div>

    <!-- <FooterBar></FooterBar> -->
    <!--<SetBtn></SetBtn> -->
  </div>
</template>

<script>
let layout = require("./layouts");
import { mapActions } from "vuex";
export default {
  name: "layouts",
  components: { ...layout },
  methods: {
    ...mapActions({
      UserLogin: "user/Login",
    }),
  },
  mounted() {
    this.UserLogin({
      username: "admin",
      password: "admin",
    });
  },
};
</script>

<style lang="less" scoped>
.layout {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.layout1 {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .body {
    width: 100%;
    height: 100%;
    display: flex;
    .content {
      flex: 1;
    }
  }
}

.layout2 {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  .body {
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .content {
      width: 100%;
      height: 100%;
      flex: 1;
    }
  }
}
</style>
