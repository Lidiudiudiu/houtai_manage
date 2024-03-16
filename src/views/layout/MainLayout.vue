<template>
  <div class="layout">
    <NavBar></NavBar>
    <div class="layout-right">
        <HeaderView></HeaderView>
        <ContentView></ContentView>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
import HeaderView from './HeaderView.vue';
import ContentView from './ContentView.vue';
export default {
  data() {
    return {

    }
  },
  components: {
    NavBar,HeaderView,ContentView
  }
}
</script>

<style>
    .layout {
        width: 100%;
        height: 100%;
        display: flex;
    }

    .layout .layout-right {
      flex:1;
      padding-left: 220px;
    }
</style>