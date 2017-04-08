<template>
  <div class="desktop">
    <header-component></header-component>
    <div class="desk-content">
      <left-component></left-component>
      <div class="desk-right">
        <p class="right-title">我的桌面</p>
        <Table :row-class-name="hoverShow" :columns="tableHeader" :data="tableData"></Table>
      </div>
    </div>
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
        tableHeader: [
          {
            title: '文件名',
            key: 'filename',
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
                            <li><Icon type="bookmark" size="16"></Icon>标星</li>
                            <li><Icon type="ios-color-filter-outline" size="16"></Icon>协作</li>
                            <li><Icon type="android-arrow-forward" size="16"></Icon>移动</li>
                            <li><Icon type="ios-trash-outline" size="16"></Icon>删除</li>
                          </ul>
                        </div>
                      </Poptip>
                    `
            }
          }
        ],
        tableData: [
          {
            'filename': '测试文档',
            'creator_name': 'JoseLee',
            'update_time': '2017-04-03'
          },
          {
            'filename': '译库4.0buglist',
            'creator_name': '千秋雪',
            'update_time': '2017-04-01'
          },
          {
            'filename': '译库4.0buglist',
            'creator_name': '千秋雪',
            'update_time': '2017-04-05'
          },
          {
            'filename': '译库4.0buglist',
            'creator_name': '千秋雪',
            'update_time': '2017-04-03'
          },
          {
            'filename': '译库4.0buglist',
            'creator_name': '千秋雪',
            'update_time': '2017-04-03'
          }
        ]
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
      hoverShow () {
        return 'hover-show'
      }
    },
    computed: {}
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
    }
    .nodis {
      display: none;
    }
  }
</style>
