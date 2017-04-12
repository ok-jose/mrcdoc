<template>
  <div class="container">
    <navbar-component></navbar-component>
    <div id="section1" class="section">
      <div class="img-con">
        <img src="../assets/page1.png" alt="">
      </div>
    </div>
    <div id="section2" class="section">
      <div class="desc-con">
        <p class="mrc-desc">
          MARK文档是一款轻便、简洁的在线协作文档工具，PC端和移动端全覆盖，支持多人同时对文档编辑和评论，让你与他人轻松完成协作撰稿、方案讨论、会议记录和资料共享等工作
        </p>
        <span class="join-btn">立即使用</span>
      </div>
    </div>
    <div id="section3" class="section">
      <div class="desc-con">
        <p class="mrc-desc">
          MARK文档是一款轻便、简洁的在线协作文档工具，PC端和移动端全覆盖，支持多人同时对文档编辑和评论，让你与他人轻松完成协作撰稿、方案讨论、会议记录和资料共享等工作
        </p>
        <span class="join-btn">立即使用</span>
      </div>
    </div>
    <div id="section4" class="section">
      <div class="desc-con">
        <p class="mrc-desc">
          MARK文档是一款轻便、简洁的在线协作文档工具，PC端和移动端全覆盖，支持多人同时对文档编辑和评论，让你与他人轻松完成协作撰稿、方案讨论、会议记录和资料共享等工作
        </p>
        <span class="join-btn">立即使用</span>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import navbarComponent from '../components/Navbar.vue'
  import footerComponent from '../components/Footer.vue'
  import service from '../services/login'
  export default {
    components: {
      navbarComponent,
      footerComponent
    },
    data () {
      return {
        token: ''
      }
    },
    created () {
//      this.getToken()
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
  html, body, #app, .container, .section {
    width: 100%;
    height: 100%;
  }

  .container {
    min-width: 980px;
    .section {
      min-height: 650px;
      background: repeat-x center center fixed;
      background-size: cover;
      overflow: hidden;
    }
  }

  .desc-con(@x,@y,@direction) {
    .desc-con{
      width: 400px;
      font-size: 16px;
      padding: 25px;
      color: #ffffff;
      float: @direction;
      margin-top:@y;
      margin-@{direction}:@x;
      background-color: rgba(0, 0, 0, 0.8);
      .join-btn {
        display: inline-block;
        margin-top: 10px;
        border: 1px solid @yellow;
        padding: 5px 20px;
      }
    }
  }

  #section1 {
    background-image: url(../assets/1.jpg);
    .img-con {
      margin-top: 200px;
    }
  }

  #section2 {
    background-image: url("../assets/2.jpg");
      .desc-con(300px,200px,left);
  }

  #section3 {
    background-image: url("../assets/3.png");
    .desc-con(300px,200px,right);
  }

  #section4 {
    background-image: url("../assets/4.png");
    .desc-con(300px,300px,left);
  }
</style>
