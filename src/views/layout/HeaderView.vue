<template>
    <div class="header">
      <div class="header-top">
       <div class="fl">
         <el-button icon="el-icon-s-unfold" v-show="!isShow" @click="changeshow"></el-button>
         <el-button icon="el-icon-s-fold" v-show="isShow" @click="changeshow"></el-button>
       </div>
       <div class="fl">
        <Crumb></Crumb>
       </div>
       <div class="fr">
        <el-dropdown @command="hdCommand">
          <div class="avatar-box">
            <img :src="IMG_BASEURL+(userInfo.user.avatar||
          '/profile/avatar/2022/10/10/blob_20221010200353A001.jpeg')" alt="" width="40" height="40">
            <i class="el-icon-caret-bottom"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="profile">个人中心</el-dropdown-item>
            <el-dropdown-item divided command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
          
      </div>
      </div>
      <div class="header-bottom">
        <Tags></Tags>
      </div>
    </div>
</template>

<script>
import { IMG_BASEURL } from '@/utils/baseurl';
import { mapMutations,mapState } from 'vuex';
import Crumb from '@/components/Crumb.vue';
import Tags from "@/components/Tags.vue"
export default {
  data(){
    return {
      isShow:true,
      IMG_BASEURL
    }
  },
  components:{
    Crumb,Tags
  },
  computed:{
    ...mapState({
      userInfo:state=>state.userInfo.userInfo
    })
  },
  methods:{
    ...mapMutations({
      changeIsCollapse:"navCollapse/changeIsCollapse"
    }),
    changeshow(){
      this.isShow = !this.isShow;
      this.changeIsCollapse();
    },
    hdCommand(command){
      if(command == "logout") {
        localStorage.removeItem("edb-authorization-token");
        localStorage.removeItem("edb-userInfo")
        this.$router.push('/login');
      }
      if(command == "profile")[
        this.$router.push("/profile")
      ]
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
  .header .header-top {
    height: 50px;
    box-shadow: 0px 1px 1px #f4f1f1;
  }
  .fl {
    float: left;
  }
  .fr{
    float: right;
  }
  .header .avatar-box {
    padding: 5px 20px 0 0;
  }
  .header .avatar-box img{
    border-radius: 5px;
  }

  .header .avatar-box img,.header .avatar-box i{
    cursor: pointer;
  }
</style>