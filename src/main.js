import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'

import './common/stylus/index.styl'

fastclick.attach(document.body)
let vRender = new Vue({
  el: '#app',
  render: h => h(App)
})
Vue.use({
  vRender
})