<template>
  <div>
    <div class="header">
      <el-button icon="el-icon-s-unfold" v-show="!isShow" @click="changeshow"></el-button>
      <el-button icon="el-icon-s-fold" v-show="isShow" @click="changeshow"></el-button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data(){
    return {
      isShow:true,
    }
  },
  methods:{
    ...mapMutations({
      changeIsCollapse:"navCollapse/changeIsCollapse"
    }),
    changeshow(){
      this.isShow = !this.isShow;
      this.changeIsCollapse();
    }
  }
}
</script>

<style>
  .header{
    height: 84px;
    box-shadow: 0px 5px 5px #ddd;
  }
  .header .el-button {
    padding-left: 8px;
    padding-top: 8px;
    color: #169e5c;
    margin: 0;
    font-size: 35px;
    width: 50px;
    height: 50px;
    border: none;
  }
</style>