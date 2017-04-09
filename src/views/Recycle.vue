<template>
  <div class="recycle">
    <header-component></header-component>
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
        recycleList: []
      }
    },
    created () {
      this.getReLists()
      console.log(this.recycleList)
    },
    methods: {
      getReLists () {
        service.getRecycleFile().then((data) => {
          if (data.status_code === 200) {
            this.recycleList = data.files
          }
        })
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less" type="text/less">
  .recycle{

  }
</style>
