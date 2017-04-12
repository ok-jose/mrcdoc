<template>
  <div class="mrc-footer">
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
<script>

</script>
<style lang="less" rel="stylesheet/less" type="text/less">
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
