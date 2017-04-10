<template>
  <div class="recent">
    <header-component></header-component>
    <div class="recent-con">
      <left-component></left-component>
      <div class="recent-right">
        <p class="right-title">最近文件</p>
        <Table :columns="tableHeader" :data="recentList"></Table>
      </div>
    </div>
  </div>
</template>
<script>
  import headerComponent from '../components/Header.vue'
  import leftComponent from '../components/Left.vue'
  import service from '../services/recent'
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
            title: '操作时间',
            key: 'update_time',
            sortable: true
          },
          {
            title: '操作',
            key: 'file_id'
          }
        ],
        recentList: []
      }
    },
    created () {
      this.getReLists()
//      console.log(this.recentList)
    },
    methods: {
      getReLists () {
        service.getRecentFile().then((data) => {
          if (data.status_code === 200) {
            this.recentList = data.data.recent_files
          }
        })
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less" type="text/less">
  .recent{
    .recent-con{
      width: 1200px;
      margin: 40px auto;
      text-align: left;
      .recent-right {
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

