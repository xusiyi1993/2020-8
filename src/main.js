// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './views/App'
import router from './router'
import VueRouter from 'vue-router'

import Vant from 'vant'
import 'vant/lib/index.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import iView from 'iview'
import 'iview/dist/styles/iview.css'

import axios from 'axios'
Vue.prototype.$axios = axios

Vue.use(VueRouter)
Vue.use(Vant)
Vue.use(ElementUI)
Vue.use(iView)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
