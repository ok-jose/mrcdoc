<template>
  <div class="profile">
    <header-component></header-component>
    <div class="bread-crumb">
      <Breadcrumb separator=">">
        <Breadcrumb-item href="/desktop">桌面</Breadcrumb-item>
        <Breadcrumb-item>账号设置</Breadcrumb-item>
      </Breadcrumb>
    </div>
    <div class="profile-content">
      <div class="profile-left">
        <div class="img-info">

        </div>
        <ul class="profile-tabs">
          <li class="profile-tab">账号设置</li>
          <li class="profile-tab">好友列表</li>
          <li class="profile-tab">通知设置</li>
        </ul>
      </div>
      <div class="profile-right">
        <div class="info-item">
            <span class="item-name">
              <Icon type="person"></Icon>
              昵称：
            </span>
        </div>
        <div class="info-item">
            <span class="item-name">
              <Icon type="ios-email"></Icon>
              邮箱：
            </span>
        </div>
        <div class="info-item">
            <span class="item-name">
             <Icon type="locked"></Icon>
              密码：
            </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import headerComponent from '../components/Header.vue'
  export default {
    components: {
      headerComponent
    }
  }
</script>
<style lang="less" rel="stylesheet/less" type="text/less">
  .profile {
    text-align: left;
  }

  .bread-crumb {
    width: 820px;
    margin: 0 auto;
    padding: 20px 0 15px;
    .ivu-breadcrumb {
      font-size: 12px;
    }
  }

  .profile-content {
    width: 816px;
    margin: 0 auto 30px;
    padding: 130px 0px 135px 150px;
    min-height: 500px;
    background-color: #ffffff;
    box-shadow: 0px 1px 6px #ccc;
    box-sizing: border-box;
    transition: opacity 0.2s ease-in;
    text-align: left;
    .profile-left {
      float: left;
      width: 58px;
      padding: 40px 44px 0px 14px;
      box-sizing: content-box;
      border-right: 1px solid #e8ecf1;
      .img-info {
        margin-top: 0;
        text-align: center;
        position: relative;
        height: 58px;
        width: 58px;
        background-color: #6ea3e6;
      }
      .profile-tabs {
        margin-top: 38px;
        .profile-tab {
          height: 12px;
          line-height: 12px;
          margin-bottom: 20px;
          cursor: pointer;
          color: #808080;
        }
      }
    }
    .profile-right {
      padding-left: 116px;
      .info-item {
        margin-top: 24px;
        line-height: 22px;
        font-size: 0;
        .item-name {
          margin: 0 30px 0 0px;
          display: inline-block;
          vertical-align: top;
          width: 80px;
          font-size: 14px;
          text-align: right;
        }
        &:first-child {
          margin-top: 0;
        }
      }
    }
  }
</style>
