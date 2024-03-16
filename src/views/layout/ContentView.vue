<template>
  <div class="layout-content" :class="{hasBg:$route.path=='/home'}">
    <transition name="fade-transform" mode="out-in">
       <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .hasBg{
    background:url(../../assets/screenbg.jpg) center top no-repeat;
    background-size: cover;
  }
  .layout-content {
    padding: 20px;
    height: calc(100% - 124px);
  }
  .fade-transform-enter,.fade-transform-leave{
    opacity: 0;
    transform: translateX(10px);
  }

  .fade-transform-enter-active,.fade-transform-leave-active {
    transition: all .3s;
  }

  .fade-transform-enter-to,.fade-transform-leave{
    opacity: 1;
    transform: translateX(0px);
  }
</style>