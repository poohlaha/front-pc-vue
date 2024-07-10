import Vue from 'vue'
import App from './index.vue'
import store from '@stores/index'

import FastClick from 'fastclick'
import 'lib-flexible'
import '@assets/styles/skin/index.less'

// fastclick
FastClick.attach(document.body)

Vue.config.productionTip = false

let options = {
  store,
  render: h => h(App),
}

if (process.env.VUE_APP_MULTI_PAGE_PACK !== 'true') {
  const router = require('../../route')
  options.router = router.default
}

new Vue(options).$mount('#app')
