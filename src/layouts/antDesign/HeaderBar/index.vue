<!--
 * @Author: ay
 * @Date: 2021-09-15 11:30:43
 * @LastEditTime: 2021-09-15 15:58:02
 * @LastEditors: Please set LastEditors
 * @Description: 布局 - 头部
 * @FilePath: \vue-basic-admin\src\layouts\antDesign\HeaderBar\index.vue
-->
<template>
  <!-- 左右布局 -->
  <div class="an-headerBar">
    <!-- 左侧 -->
    <div>
      <!-- 折叠按钮 -->
      <div class="closeIcon">
        <!-- 关闭 -->
        <a-icon type="menu-fold" />
        <!-- 展开 -->
        <!-- <a-icon type="menu-unfold" /> -->
      </div>

      <!-- 面包屑 -->
      <div class="breadcrumb">
        <template>
          <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item
              ><a href="">Application Center</a></a-breadcrumb-item
            >
            <a-breadcrumb-item
              ><a href="">Application List</a></a-breadcrumb-item
            >
            <a-breadcrumb-item>An Application</a-breadcrumb-item>
          </a-breadcrumb>
        </template>
      </div>
    </div>

    <!-- 右侧 -->
    <div>
      <!-- 工具栏 -->
      <div class="util">
        <div>
          <a-icon type="message" />
        </div>
        <div>
          <a-icon type="message" />
        </div>
        <div>
          <a-icon type="message" />
        </div>
        <div>
          <a-icon type="message" />
        </div>
      </div>

      <!-- 用户 -->
      <div class="user">
        <a-dropdown class="user-dropdown">
          <div @click="(e) => e.preventDefault()">
            <img src="@/assets/logo.png" alt="" />
            <span>vue-basic-admin</span>
          </div>

          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">1st menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">2nd menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">3rd menu item</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>

      <!-- 设置 -->
      <div class="setting">
        <a-icon type="setting" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    open1() {
      this.$success("这是一条消息提示", 2, () => {
        console.log(415);
      });
    },

    open2() {
      this.$message.success("恭喜你，这是一条成功消息");
    },

    open3() {
      this.$message.warning("警告哦，这是一条警告消息");
    },

    open4() {
      this.$message.error("错了哦，这是一条错误消息");
    },
  },
};
</script>

<style lang="less" scoped>
.an-headerBar {
  transition: width 0.2s;
  transition-property: width;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  transition-delay: 0s;
  flex: 0 0 auto;
  width: 100%;
  height: 48px;
  background-color: #fff !important;
  border-bottom: 1px solid #eee;
  border-left: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;

  & > div {
    display: flex;
    height: 100%;
    align-items: center;
  }
  // 左侧
  .closeIcon {
    color: #000;
    display: flex;
    height: 100%;
    padding: 1px 10px 0;
    cursor: pointer;
    align-items: center;
  }
  .breadcrumb {
    display: flex;
    padding: 0 8px;
    align-items: center;
  }
  // 右侧
  .util {
    height: 100%;
    display: flex;
    align-items: center;
    & > div {
      height: 100%;
      padding: 10px;
      display: flex;
      align-items: center;
      font-size: 1.2em;
      cursor: pointer;
      font-size: 18px;
      &:hover {
        background-color: #f6f6f6;
      }
    }
  }
  .user {
    height: 100%;
    &:hover {
      background-color: #f6f6f6;
    }
    .user-dropdown {
      height: 100%;
      padding: 0 10px;
      overflow: hidden;
      font-size: 14px;
      color: #000000d9;
      cursor: pointer;
      align-items: center;
      display: flex;
      & > img {
        width: 24px;
        height: 24px;
        margin-right: 12px;
        border-radius: 50%;
        box-sizing: border-box;
        overflow: hidden;
      }
    }
  }
  .setting {
    display: flex !important;
    height: 48px;
    padding: 0 12px;
    font-size: 1.2em;
    cursor: pointer;
    align-items: center;
    color: #000000d9;
    &:hover {
      background-color: #f6f6f6;
    }
  }
}
</style>
