<template>
  <div class="nav-header">
    <div class="header-con">
      <a href="/" class="logo-bg"></a>
      <div class="avatar-con">
        <Icon class="notice-bell" type="ios-bell-outline" size="20"></Icon>
        <Poptip placement="bottom-end" width="350">
          <img class="avatar-box" src="../assets/avatar.jpg" width="30" alt="">
          <div class="api" slot="content">
            <ul class="user-center">
              <li>JoseLee</li>
              <li>账号设置</li>
              <li>退出登录</li>
            </ul>
          </div>
        </Poptip>
      </div>
    </div>
  </div>
</template>
<style lang="less" rel="stylesheet/less" type="text/less">
  .header-con {
    width: 1200px;
    height: inherit;
    margin: 0 auto;
    text-align: left;
    .logo-bg {
      display: inline-block;
      height: 50px;
      width: 166px;
      background: url("../assets/logo1.png") no-repeat center;
      background-size: contain;
    }
    .avatar-con {
      float: right;
      .notice-bell {
        vertical-align: middle;
        margin-right: 20px;
      }
      .avatar-box {
        border-radius: 50%;
        vertical-align: middle;
      }
      .user-center {
        & > li {
          border-bottom: 1px solid #ececec;
        }
      }
    }
  }
</style>
