<template>
  <div class="nav-header">
    <div class="header-con">
      <a href="/desktop" class="logo-bg"></a>
      <div class="avatar-con">
        <Poptip placement="bottom-end" width="400">
          <Badge :count="notice.unread.length">
            <Icon class="notice-bell" type="ios-bell-outline" size="20"></Icon>
          </Badge>
          <div class="notice" slot="content">
            <Tabs>
              <Tab-pane label="全部" icon="chatbubble-working">
                <div class="all-msg">
                  <ul class="msg-list">
                    <li v-for="item in notice.notice">
                      <div v-if="item.type == 0">
                        {{item.message}}
                        <Button type="primary" size="small" @click="dealFriend(item.from_uid, 1, item.id)">同意</Button>
                        <Button type="success" size="small" @click="dealFriend(item.from_uid, 0, item.id)">拒绝</Button>
                      </div>
                      <div v-else>
                        {{item.from_username}}添加您为文档{{item.filename}}的协作者
                        <a @click="readDocNotice(item.id, item.file_id, item.is_read)">查看</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </Tab-pane>
              <Tab-pane :label="'未读('+notice.unread.length+')'" icon="eye">
                <div class="no-read">
                  <ul>
                    <li v-for="item in notice.unread">
                      {{item.type}}
                    </li>
                  </ul>
                </div>
              </Tab-pane>
            </Tabs>
          </div>
        </Poptip>
        <Poptip placement="bottom-end" width="250">
          <img class="avatar-box" :src="profile.picture !== ''?profile.picture:defaultAvatar" width="30" alt="">
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
  import service from '../services/friend'
  export default {
    props: ['profile', 'notice'],
    data () {
      return {
        defaultAvatar: require('../assets/avatar.jpg')
      }
    },
    methods: {
      dealFriend (fid, type, id) {
        service.replyFriend(fid, type).then((data) => {
          if (data.status_code === 200) {
            this.readFunc(id)
          }
        })
      },
      readDocNotice (id, fid, isRead) {
        if (isRead === '0') {
          this.readFunc(id)
        }
        this.$router.push({path: 'editor/' + fid})
      },
      readFunc (id) {
        service.readNotice(id).then((data) => {
          if (data.status_code === 200) {
            console.log('read')
          }
        })
      },
      signOut () {
        //eslint-disable-next-line
        Cookies.set('token', '')
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
      .ivu-poptip-body {
        /*padding:0;*/
      }
      .notice {
        .ivu-tabs-nav-container {
          font-size: 12px;
          line-height: 1;
        }
        .all-msg, .no-read {
          height: 450px;
          overflow: scroll;
        }
        .msg-list {
          & > li {
            height: 80px;
            line-height: 80px;
            &:hover {
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
