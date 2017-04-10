<template>
  <div class="recycle">
    <header-component></header-component>
    <div class="recycle-con">
      <left-component></left-component>
      <div class="recycle-right">
        <p class="right-title">回收站</p>
        <Table :columns="tableHeader" :data="recycleList"></Table>
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
            key: 'filename'
          },
          {
            title: '删除时间',
            key: 'update_time',
            sortable: true
          },
          {
            title: '操作',
            key: 'file_id'
          }
        ],
        recycleList: []
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
