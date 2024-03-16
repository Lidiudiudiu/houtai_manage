<template>
  <div class="crumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item v-for="item,index in titles" :key="index">{{ item }}</el-breadcrumb-item>
</el-breadcrumb>
  </div>
</template>

<script>
export default {
    data() {
        return {
            titles:[]
        }
    },
    watch:{
      $route:{
        immediate:true,
        handler(val,oldval){
          this.titles = this.$route.meta.titles
        }
      }
    }
}
</script>

<style>
  .crumb .el-breadcrumb{
    line-height: 50px;
    font-size: 15px;
  }
</style>