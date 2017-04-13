<template>
  <div class="recent">
    <header-component></header-component>
    <div class="recent-con">
      <left-component></left-component>
      <div class="recent-right">
        <p class="right-title">最近文件</p>
        <!--<Table :columns="tableHeader" :data="recentList"></Table>-->
         <div class="table-header">
           <span class="header-name list-table-cell">文件名</span>
           <span class="header-auth list-table-cell">创建者</span>
           <span class="operate-time list-table-cell">操作时间</span>
         </div>
        <ul class="table-body">
          <li v-for="dateItem in recentList">
            <div class="update-day">
              {{dateItem.date}}
            </div>
            <ul>
              <li class="table-item-row" v-for="item in dateItem.files">
                <Icon type="android-bookmark" :class="item.is_star === 1 ? 'star-color' : 'un-star-color'"></Icon>
                <a href=""></a>
                {{item.filename}}--{{item.creator_name}}--{{item.update_time}}
              </li>
            </ul>
          </li>
        </ul>
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
        .table-header{
          width:840px;
          overflow: hidden;
          .list-table-cell{
            display: inline-block;
            float: left;
          }
          .header-name{
            width:520px;
          }
          .header-auth{
            width:120px;
          }
        }
        .table-body{
          display: block;
          .update-day{
            display: block;
            height: 30px;
            line-height: 30px;
            clear: both;
            color: #a5a5a5;
            font-weight:600;
            text-indent: 24px;
            background: rgba(232,236,241,.25);
            border-bottom: 1px solid #e5e5e5;
          }
          .table-item-row{
            display: block;
            position: relative;
            height: 44px;
            line-height: 44px;
            border-bottom: 1px solid #e5e5e5;
          }
        }
      }
    }
    .star-color{
      color: #6ea3e6;
    }
    .un-star-color{
      color: #a5a5a5;
    }
  }
</style>

