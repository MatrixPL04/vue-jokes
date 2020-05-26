import Vue from 'vue'
import VueCookies from 'vue-cookies'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(VueCookies)

Vue.$cookies.config('365d')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
