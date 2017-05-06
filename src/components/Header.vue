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
                    <li v-for="item in notice.notice" :class="item.is_read==0?'unread':''">
                      <img class="from-avatar" :src="item.from_picture!==''?item.from_picture:defaultAvatar" alt="">
                      <div class="msg-box">
                        <p class="msg-text" v-if="item.type == 0">
                          {{item.message}}
                          <Button type="primary" size="small" @click="dealFriend(item.from_uid, 1, item.id)">同意</Button>
                          <Button type="success" size="small" @click="dealFriend(item.from_uid, 0, item.id)">拒绝</Button>
                        </p>
                        <p class="msg-text" v-else-if="item.type == 1">
                          {{item.from_username}}添加您为文档【{{item.filename}}】的协作者
                          <a @click="readDocNotice(item.id, item.file_id, item.is_read)">查看</a>
                        </p>
                        <p class="msg-text" v-else>
                          {{item.from_username}}{{item.is_accept == 0?'拒绝':'接受'}}了您的请求
                          <a @click="readDealFriend(item.is_read, item.id)">知道了</a>
                        </p>
                        <p class="msg-time">{{item.create_time}}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </Tab-pane>
              <Tab-pane :label="'未读('+notice.unread.length+')'" icon="eye">
                <div class="no-read">
                  <ul class="msg-list">
                    <li v-for="item in notice.unread">
                      <img class="from-avatar" :src="item.from_picture!==''?item.from_picture:defaultAvatar" alt="">
                      <div class="msg-box">
                        <p class="msg-text" v-if="item.type == 0">
                          {{item.message}}
                          <Button type="primary" size="small" @click="dealFriend(item.from_uid, 1, item.id)">同意</Button>
                          <Button type="success" size="small" @click="dealFriend(item.from_uid, 0, item.id)">拒绝</Button>
                        </p>
                        <p class="msg-text" v-else-if="item.type == 1">
                          {{item.from_username}}添加您为文档【{{item.filename}}】的协作者
                          <a @click="readDocNotice(item.id, item.file_id, item.is_read)">查看</a>
                        </p>
                        <p class="msg-text" v-else>
                          {{item.from_username}}{{item.is_accept == 0?'拒绝':'接受'}}了您的请求
                          <a @click="readDealFriend(item.is_read, item.id)">知道了</a>
                        </p>
                        <p class="msg-time">{{item.create_time}}</p>
                      </div>
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
  import service from '../services/header'
  export default {
//    props: ['profile', 'notice'],
    data () {
      return {
        profile: [],
        notice: {
          notice: [],
          unread: []
        },
        defaultAvatar: require('../assets/avatar.jpg')
      }
    },
    created () {
      this.getUserProfile()
      this.getUserNotices()
    },
    methods: {
      getUserProfile () {
        service.getUser().then((data) => {
          if (data.status_code === 200) {
            this.profile = data.data.userinfo
          }
        })
      },
      getUserNotices () {
        service.getNotice().then((data) => {
          if (data.status_code === 200) {
            this.notice.notice = data.data.notices
            let notice = data.data.notices
            // eslint-disable-next-line
            this.notice.unread = _.filter(notice, (o) => {
              return o.is_read < 1
            })
          }
        })
      },
//      处理好友请求
      dealFriend (fid, type, id) {
        service.replyFriend(fid, type).then((data) => {
          if (data.status_code === 200) {
            this.$Notice.success({
              title: '操作成功',
              desc: '成功回复好友申请'
            })
            this.readFunc(id)
          } else if (data.status_code === 240) {
            this.$Notice.error({
              title: '操作失败',
              desc: '您已经处理过该好友请求了'
            })
          }
        })
      },
//        查看好友申请结果
      readDealFriend (isRead, id) {
        if (isRead === '0') {
          this.readFunc(id)
        } else {
          this.$Notice.success({
            title: '操作提示',
            desc: '您已经查看过该条信息了'
          })
        }
      },
//      查看邀请我协作的文档
      readDocNotice (id, fid, isRead) {
        if (isRead === '0') {
          this.readFunc(id)
        }
        this.$router.push({path: 'editor/' + fid})
      },
//      读通知的函数
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
            padding: 10px;
            &:hover {
              background-color: #f0f0f0;
            }
          }
          .from-avatar {
            display: inline-block;
            vertical-align: top;
            width: 40px;
            height: 40px;
            border-radius: 50%;
          }
          .msg-box {
            display: inline-block;
            width: 270px;
            .msg-time {
              text-align: right;
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

  .ivu-notice {
    z-index: 1061 !important;
  }
</style>
