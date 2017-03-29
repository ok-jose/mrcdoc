<template>
  <div class="container">
    <div class="nav-bar">
      <a href="/" class="logo"></a>
      <ul class="func-list">
        <li><a href="">功能</a></li>
        <li><a href="">解决方案</a></li>
        <li><a href="">更多</a></li>
        <li><a href="">关于我们</a></li>
      </ul>
    </div>
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
      <div class="mrc-footer">

      </div>
    </div>
    <div class="Newfooter">
      <div class="wp cl">
        <div class="weixin-pic"></div>
        <div class="weixin-text">
          <div style="padding-top:63px">订阅号：Lee-Jose-echo<br>
            扫一扫关注微信账号
          </div>
        </div>
        <div class="copyrightWP">
          <div class="bottomNav cl">
            <div class="leftbox">
              <div class="tit">在线客服</div>
              <ul>
                <li>工作时间：9:30 - 18:30（节假日休息）</li>
                <li>客服电话：010 - 56538600</li>
                <li>E-mail：282923166.com</li>
              </ul>
            </div>
            <div class="leftbox2">
              <div class="tit">关于我们</div>
              <ul>
                <li><a href="javascript:;" target="_blank">关于马克文档</a></li>
                <li><a href="javascript:;" target="_blank">解决方案</a></li>
                <li><a href="javascript:;" target="_blank">联系我们</a></li>
                <li><a href="javascript:;" target="_blank">加入我们</a></li>
              </ul>
            </div>
            <a target="_blank" href="javascript:;" class="footer-logo"></a>
          </div>
          <div class="copyright">京ICP备京ICP证130164号 / 北京市公安局朝阳分局备案编号：110105000501<br>Copyright © 2006-2014 JoseLee</div>
        </div>
      </div>
    </div>
  </div>
</template>
<srcipt>

</srcipt>
<style lang="less" rel="stylesheet/less" type="text/less">
  @yellow: #fee115;
  @half: 600px;
  html, body, #app, .container, .section {
    width: 100%;
    height: 100%;
  }

  .container {
    min-width: 980px;
    .nav-bar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 58px;
      padding:0 calc(~"50% - @{half}");
      text-align: left;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 9;
      .logo {
        display: inline-block;
        width: 200px;
        height: 58px;
        background: url("../assets/logo1.png") no-repeat 0 center;
        background-size: cover;
      }
      .func-list {
        float: right;
        margin-right: 50px;
        & > li {
          float: left;
          padding: 20px;
          color: #ffffff;
          a {
            color: inherit;
          }
        }
      }
    }
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

  .Newfooter {
    background-color: #2d2d2d;
    overflow: hidden;
    text-align: left;
    .wp {
      padding: 30px 0;
      overflow: hidden;
      max-width: 1000px;
      margin: 0 auto;
    }
  }

  .weixin-pic {
    float: left;
    width: 168px;
    height: 168px;
    background: url(../assets/weixin.jpg) no-repeat 0 0;
    margin-right: 16px;
  }

  .weixin-text {
    float: left;
    width: 158px;
    height: 168px;
    border-right: solid 1px #3a3a3a;
    color: #fff;
  }

  .copyrightWP {
    float: right;
    width: 562px;
    color: #979797;
    .bottomNav {
      overflow: hidden;
    }
    .tit {
      font-size: 14px;
      color: #fff;
      a {
        color: #fff;
      }
    }
    li {
      line-height: 22px;
    }
    a {
      color: #979797;
    }
    .leftbox {
      float: left;
      width: 268px;
    }
    .leftbox2 {
      float: left;
      width: 144px;
    }
    .footer-logo {
      display: inline-block;
      float: left;
      width: 100px;
      height: 38px;
      margin-top: 30px;
      cursor: pointer;
      background: url(../assets/logo-footer.png) no-repeat 0 0;
    }
  }

  .copyright {
    color: #666;
    margin-top: 19px;
  }
</style>
