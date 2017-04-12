<template>
  <div class="nav-bar">
    <a href="/" class="logo"></a>
    <ul class="func-list">
      <li v-show="token === '' || token === undefined"><a href="/signup">登录</a></li>
      <li v-show="token !== undefined"><a href="/desktop">进入文档</a></li>
      <li><a href="">功能</a></li>
      <li><a href="/solution">解决方案</a></li>
      <li><a href="">更多</a></li>
      <li><a href="">关于我们</a></li>
    </ul>
  </div>
</template>
<script>
  import service from '../services/login'
  export default {
    data () {
      return {
        token: ''
      }
    },
    created () {
      this.getToken()
    },
    methods: {
      getToken () {
        this.token = service.guide()
        console.log(this.token)
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less" type="text/less">
  @yellow: #fee115;
  @half: 600px;
  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 58px;
    padding:0 calc(~"50% - @{half}");
    text-align: left;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9;
  .logo {
    display: inline-block;
    width: 200px;
    height: 58px;
    background: url("../assets/logo1.png") no-repeat 0 center;
    background-size: cover;
  }
  .func-list {
    float: right;
    margin-right: 50px;
  & > li {
        float: left;
        padding: 20px;
        color: #ffffff;
  a {
    color: inherit;
  }
  }
  }
  }
</style>
