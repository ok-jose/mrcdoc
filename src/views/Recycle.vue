<template>
  <div class="recycle">
    <header-component></header-component>
    <div class="recycle-con">
      <left-component></left-component>
      <div class="recycle-right">
        <p class="right-title">
          <span>回收站</span>
          <span v-show="selections.length>0">
            <Button type="primary" size="small" @click="batchOperate(0)">批量还原</Button>
            <Button type="success" size="small" @click="batchOperate(1)">批量删除</Button>
          </span>
        </p>
        <Table :columns="tableHeader" :data="recycleList" @on-selection-change="batchChoose"></Table>
      </div>
    </div>
  </div>
</template>
<script>
  import headerComponent from '../components/Header.vue'
  import leftComponent from '../components/Left.vue'
  import service from '../services/recycle'
  export default {
    components: {
      headerComponent,
      leftComponent
    },
    data () {
      return {
        tableHeader: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '文件名',
            key: 'filename',
            render (row) {
              var iconTxt = 'ios-paper-outline'
              if (row.type === 1) {
                iconTxt = 'ios-paper-outline'
                return `<Icon type="` + iconTxt + `"></Icon>` + row.filename
              } else {
                iconTxt = 'ios-folder'
                return `<Icon type="` + iconTxt + `"></Icon>` + row.filename
              }
            }
          },
          {
            title: '删除时间',
            key: 'update_time',
            sortable: true
          },
          {
            title: '操作',
            key: 'file_id',
            render (row) {
              return `<i-button type="primary" size="small" @click="resumeFiles('${row.file_id}')">还原</i-button> <i-button type="success" size="small" @click="destroyFiles('${row.file_id}')">清除</i-button>`
            }
          }
        ],
        recycleList: [],
        selections: []
      }
    },
    created () {
      this.getReLists()
//      console.log(this.recycleList)
    },
    methods: {
      getReLists () {
        service.getRecycleFile().then((data) => {
          if (data.status_code === 200) {
            this.recycleList = data.data.files
          }
        })
      },
      resumeFiles (fileIds) {
        service.resumeFiles(fileIds).then((data) => {
          if (data.status_code === 200) {
            this.$Notice.success({
              title: '文件还原成功',
              desc: '文件已经还原到相应位置，请去查看'
            })
            this.getReLists()
          }
        })
      },
      destroyFiles (fileIds) {
        service.destroyFiles(fileIds).then((data) => {
          if (data.status_code === 200) {
            this.$Notice.success({
              title: '文件清除成功',
              desc: '主人，文件已经彻底清除啦'
            })
            this.getReLists()
          }
        })
      },
      batchChoose (selection) {
        this.selections = []
        selection.forEach((v, i) => {
          this.selections.push(v.file_id)
        })
        console.log(this.selections)
      },
      batchOperate (type) {
        let fileIdsStr = this.selections.toString()
        if (type === 0) {
          this.resumeFiles(fileIdsStr)
        } else if (type === 1) {
          this.destroyFiles(fileIdsStr)
        }
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less" type="text/less">
  .recycle{
    .recycle-con{
      width: 1200px;
      margin: 40px auto;
      text-align: left;
      .recycle-right {
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
  }
</style>
