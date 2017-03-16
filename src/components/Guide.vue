<template>
  <div class="container">
    <div class="nav-bar">
      <a href="/" class="logo"></a>
      <ul class="func-list">
        <li>功能</li>
        <li>解决方案</li>
        <li>更多</li>
        <li>关于我们</li>
      </ul>
    </div>
    <div id="section1" class="section">
        <div class="img-con">
          <img src="../assets/page1.png" alt="">
        </div>
    </div>
    <div id="section2" class="section">
        <div class="dec-con">
            MARK文档是一款轻便、简洁的在线协作文档工具，PC端和移动端全覆盖，支持多人同时对文档编辑和评论，让你与他人轻松完成协作撰稿、方案讨论、会议记录和资料共享等工作
        </div>
    </div>
    <div id="section3" class="section">
      <div class="dec-con">
        MARK文档是一款轻便、简洁的在线协作文档工具，PC端和移动端全覆盖，支持多人同时对文档编辑和评论，让你与他人轻松完成协作撰稿、方案讨论、会议记录和资料共享等工作
      </div>
    </div>
    <div id="section4" class="section">
      <div class="dec-con">
        MARK文档是一款轻便、简洁的在线协作文档工具，PC端和移动端全覆盖，支持多人同时对文档编辑和评论，让你与他人轻松完成协作撰稿、方案讨论、会议记录和资料共享等工作
      </div>
    </div>
  </div>
</template>
<srcipt>

</srcipt>
<style lang="less" rel="stylesheet/less" type="text/css">
  @yellow:#fee115;
  html,body,#app,.container,.section{
    width:100%;
    height: 100%;
  }
  .container{
    min-width: 980px;
    .nav-bar{
      position: fixed;
      top:0;
      left: 0;
      right: 0;
      width: 100%;
      height: 58px;
      background-color: rgba(0,0,0,0.8);
      z-index: 9;
      .logo{
        display: inline-block;
        width: 200px;
        height: 58px;
        background: url("../assets/logo1.png") no-repeat 0 center;
        background-size: cover;
      }
    }
    .section{
      min-height: 650px;
      background: repeat-x center center fixed;
      background-size: cover;
      overflow: hidden;
    }
  }
  #section1{
    background-image: url(../assets/1.jpg);
  }
  #section2{
    background-image: url("../assets/2.jpg");
    .dec-con{
      width:400px;
      font-size: 16px;
      padding:25px;
      color: #ffffff;
      float: left;
      margin:300px 0px 0 200px;
      background-color:rgba(0,0,0,0.8) ;

    }
  }
  #section3{
    background-image: url("../assets/3.png");
  }
  #section4{
    background-image: url("../assets/4.png");
  }
</style>
