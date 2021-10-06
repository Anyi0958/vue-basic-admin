<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
body,
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
/* 自定义进度条颜色 */
#nprogress .bar {
  background: red !important;
}
</style>
