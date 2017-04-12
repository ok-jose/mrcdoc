<template>
  <div class="container">
    <navbar-component></navbar-component>
    <div class="sol-header">
      <h1 class="header-title">一站式企业协作解决方案</h1>
      <p class="header-desc">无论你想制定公司战略目标，研发一款新产品，策划一场市场活动，还是招聘候选人，你只需要在 MrcDoc
        上创建一个项目，邀请你的团队，就可以随时随地开始协作。Web、iOS、Android 全平台实时互通：MrcDoc 为你提供管理任务、安排日程、查找文件、即时讨论等团队所需要的一切协作功能。</p>
    </div>
    <Tabs>
      <Tab-pane label="图文直播" icon="android-send">
        <div class="tab-con">
          <h1>图文直播</h1>
        </div>
      </Tab-pane>
      <Tab-pane label="远程会议" icon="android-globe">
        <div class="tab-cob">
          <h1>远程会议</h1>
        </div>
      </Tab-pane>
      <Tab-pane label="团队协作" icon="ios-people">
        <div class="tab-con">
          <h1>团队协作</h1>
        </div>
      </Tab-pane>
      <Tab-pane label="云端存储" icon="ios-cloud">
        <div class="tab-con">
          <h1>云端存储</h1>
        </div>
      </Tab-pane>
    </Tabs>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import navbarComponent from '../components/Navbar.vue'
  import footerComponent from '../components/Footer.vue'
  export default {
    components: {
      navbarComponent,
      footerComponent
    },
    data () {
      return {
        flag: ''
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less" type="text/less">
  @yellow: #fee115;
  .container {
    .sol-header {
      width: 100%;
      min-width: 1280px;
      height: 562px;
      background-size: cover;
      background: url("../assets/solution.jpg") center center no-repeat;
      position: relative;
      .header-title {
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -165px;
        margin-top: -81px;
        color: #505050;
      }
      .header-desc {
        position: absolute;
        width: 800px;
        left: 50%;
        top: 50%;
        margin-left: -400px;
        margin-top: -12px;
        color: #505050;
        font-size: 16px;
      }
    }
    .ivu-tabs {
      color: #ffffff;
      background-color: rgba(0, 0, 0, .8);
      min-height: 400px;
      .ivu-tabs-nav-container {
        font-size: 16px;
        line-height: 3;
      }
      .ivu-tabs-nav {
        width: 100%;
        .ivu-tabs-ink-bar {
          background-color: @yellow;
          width: 25% !important;
        }
        .ivu-tabs-tab {
          width: 25%;
          &.ivu-tabs-tab-active {
            color: @yellow;
          }
          &:hover {
            color: @yellow;
          }
        }
      }
    }
  }
</style>
