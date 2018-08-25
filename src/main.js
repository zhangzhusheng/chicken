import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
<<<<<<< HEAD
=======
import router from './router'
>>>>>>> music1.0

import './common/stylus/index.styl'

fastclick.attach(document.body)
let vRender = new Vue({
  el: '#app',
<<<<<<< HEAD
  render: h => h(App)
=======
  render: h => h(App),
  router
>>>>>>> music1.0
})
Vue.use({
  vRender
})
