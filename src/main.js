import Vue from 'vue'
import App from './App.vue'
import router from './router'

// plugins
import '@/plugins/axios'
import '@/plugins/localforage'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
