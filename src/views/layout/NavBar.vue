<template>
  <div class="navbar" :class="{isColl:isCollapse}">
    <h1 class="main-logo">
      <img src="../../assets/logo.jpg" alt="" width="32px">
      <span v-show="!isCollapse">通用后台管理系统</span>
    </h1>
     <el-menu
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
      :collapse="isCollapse"
      :collapse-transition="false"
      :default-active="$route.path"
      >
      <div v-for="item,idx in menuData" :key="idx">
        <el-submenu :index="item.path" v-if="item.children">
        <template slot="title">
          <!-- <i class="el-icon-location"></i> -->
          <svg-icon icon-file-name="user"></svg-icon>
          <span>{{ item.title }}</span>
        </template>
          <el-menu-item :index="sitem.path" v-for="sitem,sidx in item.children" :key="sidx">{{ sitem.title }}</el-menu-item>
      </el-submenu>
      <el-menu-item :index="item.path" v-else>
        <!-- <i class="el-icon-menu"></i> -->
        <svg-icon icon-file-name="user"></svg-icon>
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  data() {
    return {
        
    }
  },
  computed:{
    ...mapState({
      isCollapse:state => state.navCollapse.isCollapse,
      menuData:state=>state.userMenuData.menuData
    })
  }
}
</script>

<style>
  .navbar{
    width: 200px;
    height: 100%;
    background-color: #0c0a0a72;
    box-shadow: 3px 0px 3px #ccc;
    position: fixed; 
    z-index: 999;
    transition: all .7s;
    overflow: hidden;
  }

  .navbar .el-menu {
    border:none;
  }

  .main-logo{
    padding: 10px 16px;
    position: relative;
  }

  .main-logo img{
    vertical-align: middle;
  }

  .main-logo span {
    min-width: 130px;
    color: #fff;
    font-weight: bold;
    position: absolute;
    left: 62px;
    top: 16px;
  }

  .navbar.isColl {
    width: 64px;
  }
  .isColl .el-submenu__title span {
    display: none;
  }
  .el-tooltip__popper.is-dark span{
    display: none;
  }

  .el-submenu .el-menu-item{
    background-color: rgb(38,52,69)!important;
  }

  .el-menu .el-menu-item:hover,.el-submenu__title:hover{
    background-color: #1411118b!important;
  }

 .svg-icon {
    font-size: 20px;
    width: 1em;
    height: 1em;
    overflow: hidden;
    vertical-align: -0.35em;
    fill: currentColor;
    margin-right: 8px;
    background-color: #d7d7e3;
}
</style>