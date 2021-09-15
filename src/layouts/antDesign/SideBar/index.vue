<!--
 * @Author: your name
 * @Date: 2021-09-15 11:31:06
 * @LastEditTime: 2021-09-15 16:19:24
 * @LastEditors: Please set LastEditors
 * @Description: 布局 - 侧边菜单栏
 * @FilePath: \vue-basic-admin\src\layouts\antDesign\SideBar\index.vue
-->
<template>
  <div class="an-sideBar">
    <a-menu
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      mode="inline"
      theme="dark"
    >
      <a-menu-item key="1">
        <a-icon type="pie-chart" />
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="desktop" />
        <span>Option 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="inbox" />
        <span>Option 3</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title"
          ><a-icon type="mail" /><span>Navigation One</span></span
        >
        <a-menu-item key="5"> Option 5 </a-menu-item>
        <a-menu-item key="6"> Option 6 </a-menu-item>
        <a-menu-item key="7"> Option 7 </a-menu-item>
        <a-menu-item key="8"> Option 8 </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"
          ><a-icon type="appstore" /><span>Navigation Two</span></span
        >
        <a-menu-item key="9"> Option 9 </a-menu-item>
        <a-menu-item key="10"> Option 10 </a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="11"> Option 11 </a-menu-item>
          <a-menu-item key="12"> Option 12 </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.an-sideBar {
  height: 100%;
  width: 210px;
  ::v-deep .ant-menu {
    height: 100% !important;
  }
}
</style>
