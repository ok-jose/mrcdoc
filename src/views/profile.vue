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
          <li class="profile-tab" :class="curShow=='account'?'cur-show': ''" @click="operation(1)">账号设置</li>
          <li class="profile-tab" :class="curShow=='friend'?'cur-show': ''" @click="operation(2)">好友列表</li>
          <li class="profile-tab" :class="curShow=='notice'?'cur-show': ''" @click="operation(3)">通知设置</li>
        </ul>
      </div>
      <div class="profile-right">
        <div class="account" v-show="curShow=='account'">
          <div class="info-item">
            <span class="item-name">
              <Icon type="person"></Icon>
              昵称：<Input v-model="curShow" placeholder="请输入..." style="width: 200px"></Input>
            </span>
          </div>
          <div class="info-item">
            <span class="item-name">
              <Icon type="ios-email"></Icon>
              邮箱：<Input v-model="curShow" placeholder="请输入..." style="width: 200px"></Input>
            </span>
          </div>
          <div class="info-item">
            <span class="item-name">
             <Icon type="locked"></Icon>
              密码：<Input v-model="curShow" type="password" placeholder="请输入..." style="width: 200px"></Input>
            </span>
          </div>
        </div>
        <div class="friend" v-show="curShow=='friend'">
          <Button type="primary" @click="addFriend = true">添加好友</Button>
          <Modal
            title="添加好友"
            v-model="addFriend"
            :mask-closable="false">
            <Input v-model="searchKey" placeholder="请输入用户昵称" @on-change="search(searchKey)" style="width: 300px"></Input>
            <p>搜索列表</p>
            <Radio-group v-model="friendId" vertical>
              <Radio :label="item.uid" v-for="item in searchLists" >
                <Icon type="person-add"></Icon>
                <span>{{item.username}}</span>
              </Radio>
            </Radio-group>
            <div slot="footer">
              <Button type="primary" v-show="friendId==''" disabled>添加好友</Button>
              <Button type="primary" v-show="friendId!==''" @click="addFriendFunc()">添加好友</Button>
            </div>
          </Modal>
          <ul class="friend-ul">
            <li v-for="item in friendLists">
              <img class="user-avatar" src="../assets/37.png" alt="">
                {{item.username}}
            </li>
          </ul>
        </div>
        <div class="notice" v-show="curShow=='notice'">
          通知
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import headerComponent from '../components/Header.vue'
  import service from '../services/desktop'
  export default {
    components: {
      headerComponent
    },
    data () {
      return {
        addFriend: false,
        searchKey: '',
        friendId: '',
        friendLists: [],
        searchLists: [],
        curShow: 'account',
        operationId: ''
      }
    },
    created () {
      this.getFriends()
    },
    methods: {
      operation (type) {
        switch (type) {
          case 1:
            this.curShow = 'account'
            break
          case 2:
            this.curShow = 'friend'
            break
          case 3:
            this.curShow = 'notice'
            break
          default:
            this.curShow = 'account'
        }
      },
      getFriends () {
//        this.curShow = this.$route.name
        service.getFriends().then((data) => {
          if (data.status_code === 200) {
            this.friendLists = data.data.friends
          }
        })
      },
      search (keywords) {
        service.searchFriend(keywords).then((data) => {
          if (data.status_code === 200) {
            this.searchLists = data.data.friends
          }
        })
      },
      addFriendFunc () {
        this.addFriend = false
        service.postFriendId(this.friendId).then((data) => {
          if (data.status_code === 200) {
            this.$Notice.success({
              title: '发送好友通知',
              desc: this.addFriend ? '' : '已经成功发送通知，等待对方同意中...'
            })
          }
        })
      }
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
        width:103px;
        .profile-tab {
          height: 30px;
          line-height: 30px;
          margin-bottom: 10px;
          cursor: pointer;
          color: #808080;
          transition: all 0.2s ease-in-out;
          /*border-right: 2px solid #6ea3e6;*/
          &:hover,&.cur-show{
            border-right: 2px solid #6ea3e6;
            font-weight: 500;
          }
        }
      }
    }
    .profile-right {
      padding-left: 116px;
      .account,.friend,.notice{
        transition: all .5s ease;
      }
      .info-item {
        margin-top: 24px;
        line-height: 22px;
        font-size: 0;
        .item-name {
          margin: 0 30px 0 0px;
          display: inline-block;
          vertical-align: top;
          /*width: 80px;*/
          font-size: 14px;
          color: #737373;
          text-align: right;
        }
        &:first-child {
          margin-top: 0;
        }
      }
    }
    .friend{
      padding-left: 20px;
      .friend-ul{
        margin-top:20px;
        &>li{
          width:70px;
          float: left;
          text-align: center;
        }
      }
      .user-avatar{
        width: 50px;
        border-radius: 50%;
        border:1px solid #2c3e50;
      }
    }
  }
</style>
