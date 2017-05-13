<template>
  <div class="desktop">
    <header-component></header-component>
    <div class="desk-content">
      <left-component @uploadFiles="getFileList"></left-component>
      <div class="desk-right">
        <p class="right-title">我的桌面</p>
        <Table :row-class-name="hoverShow" :columns="tableHeader" :data="tableData"></Table>
      </div>
    </div>
    <Modal v-model="modalData.delModal" width="360">
      <p slot="header" style="color:#f60;text-align:center">
        <Icon type="information-circled"></Icon>
        <span>删除确认</span>
      </p>
      <div style="text-align:center">
        <p>此任务删除后，可以在回收站中找回。</p>
        <p>是否继续删除？</p>
      </div>
      <div slot="footer">
        <Button type="error" size="large" @click="delItem">删除</Button>
      </div>
    </Modal>
    <Modal
      v-model="modalData.moveModal"
      title="移动文件">
      <ul>
        <li v-for="folder in filterTableDate">
          <Icon class="create-type" type="ios-folder" size="16"></Icon>
          {{folder.filename}}
        </li>
      </ul>
    </Modal>
    <Modal
      v-model="modalData.coModal"
      title="协作" width="400">
      <div class="writerList" v-show="modalData.writerState">
        <p>协作者列表</p>
        <ul class="list-ul">
          <li v-for="item in writerLists">
            <img class="li-avatar" :src="item.writer_picture!==''?item.writer_picture:defaultAvatar" alt="">{{item.writer_name}}
          </li>
        </ul>
      </div>
      <div class="addWriter" v-show="!modalData.writerState">
        <p>添加协作者</p>
        <Checkbox-group vertical v-model="writerGroup">
          <Checkbox v-for="item in friendLists" :label="item.fid" :key="item.fid">{{item.username}}</Checkbox>
        </Checkbox-group>
        </li>
      </div>
      <div slot="footer">
        <Button v-show="modalData.writerState" type="primary" @click="modalData.writerState=!modalData.writerState">
          添加协作者
        </Button>
        <Button v-show="!modalData.writerState" type="primary" @click="addCoWriters()">确认添加</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
  import navbarComponent from '../components/Navbar.vue'
  import leftComponent from '../components/Left.vue'
  import headerComponent from '../components/Header.vue'
  import service from '../services/desktop'
  export default{
    components: {
      navbarComponent,
      leftComponent,
      headerComponent
    },
    data () {
      return {
        profile: [],
        modalData: {
          delModal: false,
          coModal: false,
          moveModal: false,
          writerState: true
        },
        curValue: '',
        operationId: '',
        defaultAvatar: require('../assets/avatar.jpg'),
        tableHeader: [
          {
            title: '收藏',
            key: 'is_star',
            width: 60,
            align: 'center',
            render (row) {
              if (row.is_star === 1) {
                return `<span @click="operation('${row.file_id}', ${row.is_star})"><Icon type="android-bookmark" color="#6ea3e6"></Icon></span>`
              } else {
                return `<span @click="operation('${row.file_id}', ${row.is_star})"><Icon type="android-bookmark" color="#a5a5a5"></Icon></span>`
              }
            }
          },
          {
            title: '文件名',
            key: 'filename',
            filters: [
              {
                label: '只看文件',
                value: 1
              },
              {
                label: '只看文件夹',
                value: 0
              }
            ],
            filterMultiple: false,
            filterMethod (value, row) {
              if (value === 1) {
                return row.type === 1
              } else if (value === 0) {
                return row.type === 0
              }
            },
            render (row) {
              var iconTxt = 'ios-paper-outline'
              if (row.type === 1) {
                iconTxt = 'ios-paper-outline'
                return `<a href="/editor/` + row.file_id + `"><Icon type="` + iconTxt + `" size="20"></Icon>` + row.filename + `</a>`
              } else {
                iconTxt = 'ios-folder'
                return `<a href="/folder/` + row.file_id + `"><Icon type="` + iconTxt + `" size="20"></Icon>` + row.filename + `</a>`
              }
            }
          },
          {
            title: '创建者',
            key: 'creator_name'
          },
          {
            title: '更新时间',
            key: 'update_time',
            sortable: true
          },
          {
            title: '设置',
            key: 'file_id',
            className: 'tr-setting',
            render (row) {
              return `
                      <Poptip trigger="hover" placement="bottom" width="150">
                        <Icon type="ios-gear" size="16" class="nodis" @click="curFileValue('${row.filename}')"></Icon>
                        <div class="api" slot="content">
                        <i-input type="text" size="small" value="${row.filename}" @on-blur="autoSave('${row.file_id}', '${row.filename}')"></i-input>
                          <ul class="setting-list">
                            <li @click="operation('${row.file_id}', ${row.is_star})"><Icon type="bookmark" size="16"></Icon><span v-if="${row.is_star === 0}">收藏</span><span v-else>取消收藏</span>
                            </li>
                            <li @click="operation('${row.file_id}', 2)"><Icon type="android-arrow-forward" size="16"></Icon>移动</li>
                            <li @click="operation('${row.file_id}', 3)" v-show="${row.type} === 1"><Icon type="ios-color-filter-outline" size="16"></Icon>协作</li>
                            <li @click="operation('${row.file_id}', 4)"><Icon type="ios-trash-outline" size="16"></Icon>删除</li>
                          </ul>
                        </div>
                      </Poptip>
                    `
            }
          }
        ],
        tableData: [],
        writerLists: [],
        friendLists: [],
        writerGroup: []
      }
    },
    created () {
      service.param()
      this.getFileList()
      this.getFriendLists()
      window.breadPath = ['23', '34']
    },
    methods: {
      getUserProfile () {
        service.getUser().then((data) => {
          if (data.status_code === 200) {
            this.profile = data.data.userinfo
          }
        })
      },
      getUserNotices () {
        service.getNotice().then((data) => {
          if (data.status_code === 200) {
            this.notice.notice = data.data.notices
            let notice = data.data.notices
            // eslint-disable-next-line
            this.notice.unread = _.filter(notice, (o) => {
              return o.is_read < 1
            })
          }
        })
      },
      getFileList () {
        if (this.$route.name === 'desktop') {
          service.getFiles().then((data) => {
            if (data.status_code === 200) {
              this.tableData = data.data.files
            }
          })
        } else if (this.$route.name === 'folder') {
          service.getFolderFiles(this.$route.params.file_id).then((data) => {
            if (data.status_code === 200) {
              this.tableData = data.data.files
            }
          })
        }
      },
      createFile () {
        service.createFile('jose的文件夹', '0').then((data) => {
          console.log(data)
        })
      },
      curFileValue (fileName) {
        this.curValue = fileName
      },
      operation (fileId, type) {
        this.operationID = fileId
        if (type === 0) {
          console.log('收藏')
          this.starOrNo(1)
        } else if (type === 1) {
          console.log('收藏')
          this.starOrNo(0)
        } else if (type === 2) {
          console.log('移动')
          this.modalData.moveModal = true
        } else if (type === 3) {
          console.log('协作')
          this.modalData.coModal = true
          this.getWriterList(fileId)
        } else if (type === 4) {
          console.log('删除')
          this.modalData.delModal = true
//          this.operationID = fileId
        } else if (type === 5) {
          console.log('保存')
        }
      },
      starOrNo (type) {
        service.withOrWithout(this.operationID, type).then((data) => {
          if (data.status_code === 200) {
            this.getFileList()
          }
        })
      },
      autoSave (fileId, filename) {
        service.renameFile(fileId, filename).then((data) => {
          if (data.status_code === 200) {
            this.getFileList()
          }
        })
      },
      delItem () {
        service.delFiles(this.operationID).then((data) => {
          if (data.status_code === 200) {
            this.modalData.delModal = false
            this.getFileList()
          }
        })
      },
      getWriterList (fileId) {
        service.getWriterLists(fileId).then((data) => {
          if (data.status_code === 200) {
            this.writerLists = data.data.writers
          }
        })
      },
      getFriendLists () {
        service.getFriends().then((data) => {
          if (data.status_code === 200) {
            this.friendLists = data.data.friends
          }
        })
      },
      addCoWriters () {
        this.modalData.writerState = !this.modalData.writerState
        let fileId = this.operationID
        let writerStr = this.writerGroup.toString()
        console.log(writerStr)
        service.addCoWriters(fileId, writerStr).then((data) => {
          if (data.status_code === 200) {
            this.getWriterList(fileId)
          }
        })
      },
      hoverShow () {
        return 'hover-show'
      }
    },
    computed: {
      filterTableDate: function () {
        var filterTableData = this.tableData
        return filterTableData.filter(function (item) {
          return item.type < 1
        })
      }
    },
    filters: {
      getFolders (item) {
        if (item.type < 1) {
          return item.filename
        }
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less" type="text/less">
  .desktop {
    /*.header-con style in headerComponent*/
    .desk-content {
      width: 1200px;
      margin: 40px auto;
      text-align: left;
      /* .desk-left style in leftComponent*/
      .desk-right {
        vertical-align: top;
        display: inline-block;
        float: right;
        width: 900px;
        height: 500px;
        .right-title {
          padding: 10px 0;
        }
        .ivu-table-wrapper {
          border: none;
          .ivu-table-header {
            th {
              background-color: transparent;
            }
          }
          .ivu-table {
            background-color: transparent !important;
            font-size: 14px !important;
            td {
              background-color: transparent !important;
              .icon-font {
                color: #aabbce;
                margin-right: 10px;
              }
            }
            &:after, &:before {
              width: 0;
            }
            .hover-show {
              cursor: pointer;
              &:hover {
                .nodis {
                  display: inline-block !important;
                }
              }
            }
            .tr-setting {
              .setting-list {
                & > li {
                  height: 30px;
                  line-height: 30px;
                }
              }
            }
          }
        }
      }
    }
    .nodis {
      display: none;
    }
    .ivu-icon {
      width: 28px;
      vertical-align: middle;
    }
    .writerList {
      text-align: left;
      .list-ul {
        & > li {
          height: 35px;
          line-height: 35px;
        }
      }
    }
    .addWriter {
      text-align: left;
      .ivu-checkbox-group-item {
        display: block;
      }
    }
    .li-avatar {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      margin-left: 10px;
      vertical-align: middle;
    }
  }
</style>
