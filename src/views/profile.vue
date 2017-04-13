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
  .profile{
    text-align: left;
  }
  .bread-crumb{
    width:820px;
    margin:0 auto;
    padding:20px 0 15px;
    .ivu-breadcrumb {
      font-size: 12px;
    }
  }
  .profile-content{
    width:820px;
    margin:0 auto;
    min-height:500px;
    background-color: #ffffff;
    box-shadow: 0px 1px 6px #ccc;
    box-sizing: border-box;
    transition: opacity 0.2s ease-in;
    text-align: left;
  }
</style>
