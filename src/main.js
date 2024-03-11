import Vue from 'vue'
import "reset-css"
import App from './App.vue'
import router from './router'
import './plugins/element.js'
Vue.use(router)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
