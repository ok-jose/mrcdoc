<template>
  <div class="desktop">
    <div class="nav-header">
      <div class="header-con">
        <a href="/" class="logo-bg"></a>
      </div>
    </div>
    <div class="desk-content">
      <div class="desk-left">
        <i-button type="primary" class="new-btn">新建</i-button>
        <ul class="file-tree">
          <li class="tree-sub">
            <a href="" class="file-icon">
              <svg class="icon icon-font" aria-hidden="true">
                <use xlink:href="#icon-zhuomian"></use>
              </svg>
              <span class="icon-text">我的桌面</span>
            </a>
          </li>
          <li class="tree-sub">
            <a href="" class="file-icon">
              <svg class="icon icon-font" aria-hidden="true">
                <use xlink:href="#icon-iconfontshijian"></use>
              </svg>
              <span class="icon-text">最近文件</span>
            </a>
          </li>
          <li class="tree-sub">
            <a href="" class="file-icon">
              <svg class="icon icon-font" aria-hidden="true">
                <use xlink:href="#icon-shuqian1"></use>
              </svg>
              <span class="icon-text">标星文件</span>
            </a>
          </li>
          <li class="tree-sub">
            <a href="" class="file-icon">
              <svg class="icon icon-font" aria-hidden="true">
                <use xlink:href="#icon-huishouzhan"></use>
              </svg>
              <span class="icon-text">回收站</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="desk-right">
        <p class="right-title">我的桌面</p>
          <Table :columns="tableHeader" :data="tableData"></Table>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        tableHeader: [
          {
            title: '文件名',
            key: 'filename',
            render (row) {
              return `<svg class="icon icon-font" aria-hidden="true">
              <use xlink:href="#icon-wenjianjia"></use>
            </svg>` + row.filename
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
            key: 'file_id'
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
    }
  }
</script>
<style lang="less" rel="stylesheet/less" type="text/less">
  .desktop {
    .header-con {
      width: 1200px;
      height: inherit;
      margin: 0 auto;
      text-align: left;
      /*background-color: bisque;*/
      .logo-bg{
        display: inline-block;
        height:50px;
        width: 166px;
        background: url("../assets/logo1.png") no-repeat center;
        background-size: contain;
      }
    }
    .desk-content{
      width:1200px;
      margin: 40px auto;
      text-align: left;
      .desk-left{
        display: inline-block;
        width:180px;
        text-align: center;
        .new-btn{
          background-color: #41464b;
          width:80px;
          border: none;
          border-radius: 0;
          &:hover{
            box-shadow: 0 2px 6px 0 rgba(0,0,0,.2);
          }
        }
        .file-tree{
          margin-top:20px;
          .icon{
            font-size: 16px;
          }
          .file-icon{
            display: inline-block;
            width:120px;
            font-size:14px;
            color: #41464b;
            text-align: left;
            .icon-text{
              margin-left:15px;
            }
          }
          .tree-sub{
            padding: 5px 0;
            color: #41464b;
          }
        }
      }
      .desk-right{
        vertical-align: top;
        display: inline-block;
        float: right;
        width: 900px;
        height: 500px;
        .right-title{
          padding:10px 0;
        }
        .ivu-table-wrapper{
          border:none;
          .ivu-table-header{
            th{
              background-color: transparent;
            }
          }
          .ivu-table{
            background-color: transparent !important;
            td{
              background-color: transparent !important;
              .icon-font{
                color: #aabbce;
                margin-right: 10px;
              }
            }
            &:after,&:before{
              width: 0;
            }
          }
        }
      }
    }
  }
</style>
