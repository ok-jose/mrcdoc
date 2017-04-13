<template>
  <div class="nav-header">
    <div class="header-con">
      <a href="/desktop" class="logo-bg"></a>
      <div class="avatar-con">
        <Poptip placement="bottom-end" width="400">
          <Icon class="notice-bell" type="ios-bell-outline" size="20"></Icon>
          <div class="notice" slot="content">
            <Tabs>
              <Tab-pane label="全部" icon="chatbubble-working">
                <div class="all-msg">
                  <ul class="msg-list">
                    <li>
                      XX 评论了 XX
                    </li>
                    <li>
                      XX 评论了 XX
                    </li>
                    <li>
                      XX 评论了 XX
                    </li>
                    <li>
                      XX 评论了 XX
                    </li>
                    <li>
                      XX 评论了 XX
                    </li>
                    <li>
                      XX 评论了 XX
                    </li>
                    <li>
                      XX 评论了 XX
                    </li>
                  </ul>
                </div>
              </Tab-pane>
              <Tab-pane label="未读(0)" icon="eye">
                <div class="no-read">
                  gfgfg
                </div>
              </Tab-pane>
            </Tabs>
          </div>
        </Poptip>
        <Poptip placement="bottom-end" width="250">
          <img class="avatar-box" src="../assets/avatar.jpg" width="30" alt="">
          <div class="api" slot="content">
            <ul class="user-center">
              <li>{{profile.username}}</li>
              <li><a href="/profile">账号设置</a></li>
              <li><a href="/friends">好友列表</a></li>
              <li>使用帮助</li>
              <li @click="signOut">退出登录</li>
            </ul>
          </div>
        </Poptip>
      </div>
    </div>
  </div>
</template>
<script>
  import service from '../services/desktop'
  export default {
    data () {
      return {
        profile: []
      }
    },
    created () {
      this.getUserProfile()
    },
    methods: {
      getUserProfile () {
        service.getUser().then((data) => {
          if (data.status_code === 200) {
            this.profile = data.data.userinfo
          }
        })
      },
      signOut () {
        //eslint-disable-next-line
        Cookies.set('token','');
        this.$router.push({path: 'signup'})
      }
    }
  }
</script>
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
      .ivu-poptip-body{
        /*padding:0;*/
      }
      .notice{
        .ivu-tabs-nav-container{
          font-size: 12px;
          line-height: 1;
        }
        .all-msg,.no-read{
          height:450px;
          overflow: scroll;
        }
        .msg-list{
          & > li{
            height:80px;
            line-height: 80px;
            &:hover{
              background-color: #f0f0f0;
            }
          }
        }
      }
      .avatar-box {
        border-radius: 50%;
        vertical-align: middle;
      }
      .user-center {
        & > li {
          border-bottom: 1px solid #ececec;
          line-height: 3;
        }
      }
    }
  }
</style>
