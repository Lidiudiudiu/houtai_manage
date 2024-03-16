import Vue from 'vue'
import "reset-css"
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import '@/assets/icons/index.js'
import dataV from '@jiaminghi/data-view'
import VCharts from 'v-charts'
Vue.use(dataV)
Vue.use(router)
Vue.use(VCharts)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
