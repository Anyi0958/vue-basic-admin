module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    // ant-design-vue 按需加载
    [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: true },
    ],
    // element-ui 按需加载
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk",
      },
    ],
  ],
};
