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
      >
      <div v-for="item,idx in menuData" :key="idx">
        <el-submenu :index="item.path" v-if="item.children">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{ item.title }}</span>
        </template>
          <el-menu-item :index="sitem.path" v-for="sitem,sidx in item.children" :key="sidx">{{ sitem.title }}</el-menu-item>
      </el-submenu>

      <el-menu-item :index="item.path" v-else>
        <i class="el-icon-menu"></i>
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
        menuData:[
          {
            title:"首页",
            path:"/"
          },
          {
            title:"客户管理",
            path:"/customer",
            children:[
              {
                title:'客户档案',
                path:"/customer/customer"
              },
              {
                title:'拜访记录',
                path:"/customer/visit"
              }
            ]
          },
          {
            title:"修养预约",
            path:"/business",
            children:[
              {title:'预约信息',path:"/business/appointment"},
              {title:'服务项',path:"/business/service"},
              {title:'结算单',path:"/business/statement"}
            ]
          },
          {
            title:'流程管理',
            path:"/flow",
            children:[
              {title:'审核流程定义',path:"/flow/definition"},
            ]
          }
        ]
    }
  },
  computed:{
    ...mapState({
      isCollapse:state => state.navCollapse.isCollapse
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
    position: relative; /*提升层级*/
    transition: all .7s;
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
</style>