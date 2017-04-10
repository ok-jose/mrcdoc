<template>
  <div class="container">
    <navbar-component></navbar-component>
    <div class="sol-header">
      <h1 class="header-title">一站式企业协作解决方案</h1>
      <p class="header-desc">无论你想制定公司战略目标，研发一款新产品，策划一场市场活动，还是招聘候选人，你只需要在 Teambition 上创建一个项目，邀请你的团队，就可以随时随地开始协作。Web、iOS、Android 全平台实时互通：Teambition 为你提供管理任务、安排日程、查找文件、即时讨论等团队所需要的一切协作功能。</p>
    </div>
  </div>
</template>
<script>
  import navbarComponent from '../components/Navbar.vue'
  export default {
    components: {
      navbarComponent
    },
    data () {
      return {
        flag: ''
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less" type="text/less">
  .container {
    .sol-header {
      width: 100%;
      min-width: 1280px;
      height: 562px;
      background-size: cover;
      background: url("../assets/solution.jpg") center center no-repeat;
      position: relative;
      .header-title{
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -165px;
        margin-top: -81px;
        color: #ffffff;
      }
      .header-desc{
        position: absolute;
        width: 800px;
        left: 50%;
        top: 50%;
        margin-left: -400px;
        margin-top: -12px;
        color: #ffffff;
        font-size: 16px;
      }
    }
  }
</style>
