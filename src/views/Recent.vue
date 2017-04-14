<template>
  <div class="recent">
    <header-component></header-component>
    <div class="recent-con">
      <left-component></left-component>
      <div class="recent-right">
        <p class="right-title">最近文件</p>
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
                <span @click="operation(item.file_id, item.is_star)" >
                  <Icon type="android-bookmark" :class="item.is_star === 1 ? 'star-color' : 'un-star-color'" class="list-table-cell"></Icon>
                </span>
                <a :href="/editor/+item.file_id">
                  <span class="list-table-cell file-name-cell">{{item.filename}}</span>
                </a>
                <span class="list-table-cell file-creator-cell">{{item.creator_name}}</span>
                <span class="list-table-cell file-time-cell">{{item.update_time_fmt}}</span>
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
  import service from '../services/desktop'
  export default {
    components: {
      headerComponent,
      leftComponent
    },
    data () {
      return {
        operationId: '',
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
      },
      operation (fileId, type) {
        this.operationID = fileId
        if (type === 0) {
          console.log('收藏')
          this.starOrNo(1)
        } else if (type === 1) {
          console.log('收藏')
          this.starOrNo(0)
        }
      },
      starOrNo (type) {
        service.withOrWithout(this.operationID, type).then((data) => {
          if (data.status_code === 200) {
            this.getReLists()
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
        .list-table-cell{
          display: inline-block;
          text-align: left;
        }
        .table-header{
          width:840px;
          overflow: hidden;
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
          .file-name-cell{
            width:492px;
          }
          .file-creator-cell{
            width:120px;
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

