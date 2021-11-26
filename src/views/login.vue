<!--
 * @Author: your name
 * @Date: 2021-11-23 17:33:22
 * @LastEditTime: 2021-11-26 13:53:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-basic-admin\src\views\login.vue
-->
<!--  -->
<template>
  <div class="login">
    <div class="login-form">
        <!-- logo -->
        <div class="login-form-header">
          <img src="../../src/assets/logo.png" alt="">
          <span>{{title}}</span>
        </div>
        <!-- 输入框 -->
        <div>
          
        </div>
        <!-- 操作栏 -->
        
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {
    title(){
      return this.$store.state.app.title
    }
  },

  created() {},

  mounted() {
  },

  methods: {},
};
</script>

<style scoped>
.login{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  background-color: rgba(0, 0, 0, .3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.login::before{
  content: "";
  position:absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url('https://api.ixiaowai.cn/gqapi/gqapi.php');
  background-repeat:no-repeat;
  background-size: cover;
}
/* logo  */
.login-form-header{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-form-header image{
}
</style>
