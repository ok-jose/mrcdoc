<template>
  <div class="editor-box">
    <div class="nav-header">
      <div class="header-left">
        <Tooltip content="返回">
          <a href="javascript:;" class="history-back">
            <svg class="icon icon-font" aria-hidden="true">
              <use xlink:href="#icon-fanhui1"></use>
            </svg>
          </a>
        </Tooltip>
        <span class="cur-file">
          我的毕业论文
        </span>
        <Tooltip content="标星">
          <a href="javascript:;" class="mark-star">
            <svg class="icon icon-font" aria-hidden="true">
              <use xlink:href="#icon-shuqian1"></use>
            </svg>
          </a>
        </Tooltip>
        <span class="update-time">
          2/16 15:36更新
        </span>
      </div>
      <div class="header-right">
        <Menu mode="horizontal" theme="light" active-key="1">
          <Menu-item key="1">
            <Icon type="ios-paper"></Icon>
            内容管理
          </Menu-item>
          <Menu-item key="2">
            <Icon type="ios-people"></Icon>
            用户管理
          </Menu-item>
          <Submenu key="3">
            <template slot="title">
              <Icon type="stats-bars"></Icon>
              统计分析
            </template>
            <Menu-group title="使用">
              <Menu-item key="3-1">新增和启动</Menu-item>
              <Menu-item key="3-2">活跃分析</Menu-item>
              <Menu-item key="3-3">时段分析</Menu-item>
            </Menu-group>
            <Menu-group title="留存">
              <Menu-item key="3-4">用户留存</Menu-item>
              <Menu-item key="3-5">流失用户</Menu-item>
            </Menu-group>
          </Submenu>
          <Menu-item key="4">
            <Icon type="settings"></Icon>
            综合设置
          </Menu-item>
        </Menu>
      </div>
    </div>
    <div id="toolbar">

    </div>
    <div class="qi-con">
      <!-- quill-editor -->
      <quill-editor ref="myTextEditor"
                    v-model="content"
                    :config="editorOption"
                    @blur="onEditorBlur($event)"
                    @focus="onEditorFocus($event)"
                    @ready="onEditorReady($event)">
      </quill-editor>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueQuillEditor from 'vue-quill-editor'
  Vue.use(VueQuillEditor)
  export default {
    components: {
      VueQuillEditor
    },
    data () {
      return {
        name: 'base-example',
        content: '<h2>I am Example</h2>',
        editorOption: {
          toolbar: {
            container: '#toolbar'
          }
        }
      }
    },
    created () {

    },
    methods: {
      onEditorBlur (editor) {
        console.log('editor blur!', editor)
      },
      onEditorFocus (editor) {
        console.log('editor focus!', editor)
      },
      onEditorReady (editor) {
        console.log('editor ready!', editor)
      }
    },
    computed: {
      editor () {
        return this.$refs.myTextEditor.quillEditor
      }
    },
    mounted () {
      console.log('this is my editor', this.editor)
      setTimeout(() => {
        this.content = '<h1>i am changed!</h1>'
      }, 1800)
    }
  }
</script>

<style lang="less" rel="stylesheet/less" type="text/less">
  .editor-box {
    background-color: #f0f0f0;
  }

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .nav-header {
    position: relative;
    background-color: #fff;
    box-shadow: 0 2px 3px 0 hsla(0, 0%, 39%, .15);
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
  .header-left {
    text-align: left;
    padding-left: 20px;

  .history-back {
    color: #7b7b7b;
  }

  .cur-file {
    margin: 0 20px;
  }

  .mark-star {
    vertical-align: middle;
    color: #7b7b7b;
    font-size: 20px;
  }

  .update-time {
    margin: 0 20px;
  }

  }
  .header-right {
    position: absolute;
    height: 100%;
    top: 0;
    right: 18px;

  .ivu-menu-horizontal {
    height: 50px;
    line-height: 50px;
  }

  }
  }

  .qi-con {
    width: 816px;
    margin: 0 auto;
    background-color: #ffffff;
  }

  .ql-container .ql-editor {
    min-height: 800px;
    padding-bottom: 1em;
  }

  .html {
    height: 9em;
    overflow-y: auto;
    border: 1px solid #ccc;
    border-top: none;
    resize: vertical;
  }
</style>
