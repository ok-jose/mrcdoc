<template>
  <div class="editor-box">
    <div class="nav-header">
      <div class="header-left">
        <Tooltip content="返回">
          <a href="javascript:;" class="history-back" @click="routerBack">
            <a href="javascript:;" class="mark-star">
              <Icon type="android-arrow-back"></Icon>
            </a>
          </a>
        </Tooltip>
        <span class="cur-file">
          {{filename}}
        </span>
        <Tooltip content="标星">
          <a href="javascript:;" class="mark-star">
            <Icon type="bookmark" size="16"></Icon>
          </a>
        </Tooltip>
        <span class="update-time">
          {{updateTime}}更新
        </span>
      </div>
      <div class="header-right">
      </div>
    </div>
    <div id="toolbar">

    </div>
    <div class="qi-con">
      <!-- quill-editor -->
      <quill-editor ref="myTextEditor"
                    :content="content"
                    :options="editorOption"
                    @blur="onEditorBlur($event)"
                    @focus="onEditorFocus($event)"
                    @ready="onEditorReady($event)"
                    @change="onEditorChange($event)">
      </quill-editor>
    </div>
  </div>
</template>

<script>
  import service from '../services/file'
  import Vue from 'vue'
  import VueQuillEditor from 'vue-quill-editor'
  Vue.use(VueQuillEditor)
  var socketServer = 'ws://115.159.113.28:3890'
  // var socketServer = 'ws://192.168.233.100:3890'
  var ws
  export default {
    components: {
      VueQuillEditor
    },
    data () {
      return {
        name: 'base-example',
        pid: this.$route.params.file_id,
        content: '',
        filename: '',
        updateTime: '',
        editorOption: {
          toolbar: {
            container: '#toolbar'
          }
        }
      }
    },
    created () {
      ws = new WebSocket(socketServer)
      console.log(ws)
//      service.getThisFile(this.pid).then((response) => {
//        this.content = response.data.file.content
//        this.filename = response.data.file.filename
//        this.updateTime = response.data.file.update_time
//      })
    },
    methods: {
      onEditorBlur (editor) {
        console.log('editor blur!', editor)
      },
      onEditorFocus (editor) {
        console.log('editor focus!', editor)
      },
      onEditorReady (editor) {
        service.getThisFile(this.pid).then((response) => {
          this.content = response.data.file.content
          this.filename = response.data.file.filename
          this.updateTime = response.data.file.update_time
          editor.setContents(JSON.parse(this.content))
        })
        ws.onopen = (evt) => {
          var message = {}
          message.type = 'init'
          message.doc_id = this.pid
          // eslint-disable-next-line
          var message = JSON.stringify(message)
          ws.send(message)
        }
        ws.onmessage = function (evt) {
          console.log(evt.data)
          // eslint-disable-next-line
          var messageO = eval('(' + evt.data + ')')
          if (messageO.type !== 'init') {
            var delta = messageO.delta
//            this.content = delta
            editor.updateContents(delta)
          }
        }
        console.log('editor ready!', editor)
      },
      onEditorChange (editor) {
        var message = {}
        message.type = 'message'
        message.delta = editor.delta
        message.doc_id = this.$route.params.file_id
        message.content = editor.contents
        message = JSON.stringify(message)
        console.log('editor change!', message, ws)
        ws.send(message)
      },
      routerBack () {
        this.$router.go(-1)
      }
    },
    computed: {
      editor () {
        return this.$refs.myTextEditor.quillEditor
      }
    },
    watch: {
      content: function (newV, oldV) {
        // console.log(newV, oldV)
      }
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
