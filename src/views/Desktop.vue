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
        <li v-for="folder in tableData">
          <Icon class="create-type" type="ios-folder" size="16"></Icon>
          {{folder | getFolders(folder)}}
        </li>
      </ul>
    </Modal>
  </div>
</template>
<script>
  import leftComponent from '../components/Left.vue'
  import headerComponent from '../components/Header.vue'
  import service from '../services/desktop'
  export default{
    components: {
      leftComponent,
      headerComponent
    },
    data () {
      return {
        modalData: {
          delModal: false,
          moveModal: false
        },
        operationId: '',
        tableHeader: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
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
              } else {
                iconTxt = 'ios-folder'
              }
              return `<a href="/editor/` + row.file_id + `"><Icon type="` + iconTxt + `"></Icon>` + row.filename + `</a>`
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
                      <Poptip placement="bottom" width="150">
                        <Icon type="ios-gear" size="16" class="nodis"></Icon>
                        <div class="api" slot="content">
                        <input type="text" value="` + row.filename + `">
                          <ul class="setting-list">
                            <li @click="operation('${row.fie_id}', 1)"><Icon type="bookmark" size="16"></Icon>标星</li>
                            <li @click="operation('${row.file_id}', 2)"><Icon type="android-arrow-forward" size="16"></Icon>移动</li>
                            <li @click="operation('${row.file_id}', 3)"><Icon type="ios-color-filter-outline" size="16"></Icon>协作</li>
                            <li @click="operation('${row.file_id}', 4)"><Icon type="ios-trash-outline" size="16"></Icon>删除</li>
                          </ul>
                        </div>
                      </Poptip>
                    `
            }
          }
        ],
        tableData: []
      }
    },
    created () {
      this.getFileList()
    },
    methods: {
      getFileList () {
        service.getFiles().then((data) => {
          if (data.status_code === 200) {
            this.tableData = data.data.files
          }
        })
      },
      createFile () {
        service.createFile('jose的文件夹', '0').then((data) => {
          console.log(data)
        })
      },
      operation (fileId, type) {
        if (type === 1) {
          console.log('收藏')
        } else if (type === 2) {
          console.log('移动')
          this.modalData.moveModal = true
        } else if (type === 3) {
          console.log('协作')
        } else if (type === 4) {
          console.log('删除')
          this.modalData.delModal = true
          this.operationID = fileId
        }
      },
      delItem () {
        service.delFiles(this.operationID).then((data) => {
          if (data.status_code === 200) {
            this.modalData.delModal = false
            this.getFileList()
          }
        })
      },
      hoverShow () {
        return 'hover-show'
      }
    },
    computed: {},
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
            font-size: 14px;
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
      .ivu-icon{
        width: 30px;
      }
    }
    .nodis {
      display: none;
    }
  }
</style>
