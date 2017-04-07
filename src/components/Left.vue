<template>
  <div class="desk-left">
    <Poptip placement="bottom" width="150">
      <Button type="primary" class="new-btn">新建</Button>
      <div class="api" slot="content">
        <ul class="create-list">
          <li @click="start"><Icon class="create-type" type="ios-paper-outline" size="16"></Icon>文档</li>
          <li @click="newFolder = true"><Icon class="create-type" type="ios-folder" size="16"></Icon>文件夹</li>
          <Modal
            title="新建文件夹"
            v-model="newFolder"
            class-name="vertical-center-modal"
            ok-text="新建"
            @on-ok="ok"
            @on-cancel="cancel">
            <Input v-model="folderName" placeholder="请输入文件夹名称" style="width: 300px"></Input>
          </Modal>
          <li><Icon class="create-type" type="social-markdown" size="16"></Icon>MarkDown</li>
        </ul>
      </div>
    </Poptip>
    <ul class="file-tree">
      <li class="tree-sub">
        <a href="/desktop" class="file-icon">
          <svg class="icon icon-font" aria-hidden="true">
            <use xlink:href="#icon-zhuomian"></use>
          </svg>
          <span class="icon-text">我的桌面</span>
        </a>
      </li>
      <li class="tree-sub">
        <a href="/recent" class="file-icon">
          <svg class="icon icon-font" aria-hidden="true">
            <use xlink:href="#icon-iconfontshijian"></use>
          </svg>
          <span class="icon-text">最近文件</span>
        </a>
      </li>
      <li class="tree-sub">
        <a href="/star" class="file-icon">
          <svg class="icon icon-font" aria-hidden="true">
            <use xlink:href="#icon-shuqian1"></use>
          </svg>
          <span class="icon-text">标星文件</span>
        </a>
      </li>
      <li class="tree-sub">
        <a href="/recycle" class="file-icon">
          <svg class="icon icon-font" aria-hidden="true">
            <use xlink:href="#icon-huishouzhan"></use>
          </svg>
          <span class="icon-text">回收站</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        newFolder: false,
        folderName: ''
      }
    },
    created () {

    },
    methods: {
      start () {
        console.log('新建')
      },
      ok () {
        console.log('ok')
      },
      cancel () {
        console.log('cancel')
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" type="text/less">
  .desk-left{
    display: inline-block;
    width:180px;
    text-align: center;
  .new-btn{
    background-color: #41464b;
    width:80px;
    border: none;
    border-radius: 0;
  &:hover{
     box-shadow: 0 2px 6px 0 rgba(0,0,0,.2);
   }
  }
    .create-list{
      text-align: left;
      &>li{
        height:30px;
        line-height: 30px;
        cursor: pointer;
        .create-type{
          margin-right: 20px;
        }
      }
    }
  .file-tree{
    margin-top:20px;
  .icon{
    font-size: 16px;
  }
  .file-icon{
    display: inline-block;
    width:120px;
    font-size:14px;
    color: #41464b;
    text-align: left;
  .icon-text{
    margin-left:15px;
  }
  }
  .tree-sub{
    padding: 5px 0;
    color: #41464b;
  }
  }
  }
</style>
