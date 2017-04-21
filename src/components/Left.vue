<template>
  <div class="desk-left">
    <Poptip placement="bottom" width="150">
      <Button type="primary" class="new-btn">新建</Button>
      <div class="api" slot="content">
        <ul class="create-list">
          <li @click="start(0)">
            <Icon class="create-type" type="ios-paper-outline" size="16"></Icon>
            文档
          </li>
          <li @click="start(1)">
            <Icon class="create-type" type="ios-folder" size="16"></Icon>
            文件夹
          </li>
          <Modal
            title="新建文件"
            v-model="newFolder"
            class-name="vertical-center-modal"
            ok-text="新建"
            @on-ok="ok"
            @on-cancel="cancel">
            <Input v-model="folderName" placeholder="请输入文件或文件夹名称" style="width: 300px"></Input>
          </Modal>
          <li @click="start(2)">
            <Icon class="create-type" type="social-markdown" size="16"></Icon>
            MarkDown
          </li>
        </ul>
      </div>
    </Poptip>
    <ul class="file-tree">
      <li class="tree-sub">
        <a href="/desktop" class="file-icon" :class="$route.name === 'desktop'|| $route.name === 'folder' ? 'route-active' : ''">
          <Icon type="ios-albums-outline"></Icon>
          <span class="icon-text">我的桌面</span>
        </a>
      </li>
      <li class="tree-sub">
        <a href="/recent" class="file-icon" :class="$route.name === 'recent' ? 'route-active' : ''">
          <Icon type="ios-clock-outline"></Icon>
          <span class="icon-text">最近文件</span>
        </a>
      </li>
      <li class="tree-sub">
        <a href="/star" class="file-icon" :class="$route.name === 'star' ? 'route-active' : ''">
          <Icon type="android-bookmark"></Icon>
          <span class="icon-text">标星文件</span>
        </a>
      </li>
      <li class="tree-sub">
        <a href="/recycle" class="file-icon" :class="$route.name === 'recycle' ? 'route-active' : ''">
          <Icon type="ios-trash-outline"></Icon>
          <span class="icon-text">回收站</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import service from '../services/desktop'
  export default{
    data () {
      return {
        newFolder: false,
        folderName: '',
        newFileType: '0',
        currentFolder: 'desk'
      }
    },
    created () {
      console.log(this.$route.name)
      this.$route.params.file_id === undefined ? this.currentFolder = 'desk' : this.currentFolder = this.$route.params.file_id
      console.log(this.$route.params.file_id)
    },
    methods: {
      start (type) {
        switch (type) {
          case 0:
            this.newFolder = true
            this.newFileType = '1'
            break
          case 1:
            this.newFolder = true
            this.newFileType = '0'
            break
          case 2:
            console.log('new markdown')
            break
          default:
            console.log('defaule')
            break
        }
      },
      ok () {
        service.createFile(this.folderName, this.newFileType, this.currentFolder).then((data) => {
          if (data.status_code === 200) {
            this.$emit('uploadFiles')
          }
        })
      },
      cancel () {
        console.log('cancel')
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" type="text/less">
  .desk-left {
    display: inline-block;
    width: 180px;
    text-align: center;
    .new-btn {
      background-color: #41464b;
      width: 80px;
      border: none;
      border-radius: 0;
      &:hover {
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .2);
      }
    }
    .create-list {
      text-align: left;
      & > li {
        height: 30px;
        line-height: 30px;
        cursor: pointer;
        .create-type {
          margin-right: 20px;
        }
      }
    }
    .file-tree {
      margin-top: 20px;
      .icon {
        font-size: 16px;
      }
      .file-icon {
        display: inline-block;
        width: 120px;
        font-size: 12px;
        color: #a5a5a5;
        text-align: left;
        .icon-text {
          /*margin-left: 15px;*/
        }
        &.route-active{
          color: #41464b;
        }
      }
      .tree-sub {
        padding: 5px 0;
        color: #41464b;
      }
    }
  }
  .ivu-icon{
    width: 28px;
  }
</style>
