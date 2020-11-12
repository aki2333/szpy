import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import '../theme/index.css'
import router from './router'
import store from './store'
import api from './api/index.js'
import http from './request/api.js'
import fnc from './base/fnc.js'
import cdata from './base/cdata.js'
import echarts from "echarts"
import vcolorpicker from "vcolorpicker"
import './assets/icon/iconfont.css'
import './assets/icon/iconfont.js'

Vue.config.productionTip = false
document.title = "苏州市公安局·涉外综合分析研判系统"
Vue.prototype.$api = api
Vue.prototype.$http = http
Vue.prototype.$fnc = fnc
Vue.prototype.$cdata = cdata
Vue.prototype.$echarts = echarts;
Vue.use(vcolorpicker)
var bv = fnc.getBroswerAndVersion()
console.log(bv)
// console.log("navigator", fnc.getBroswerAndVersion(), fnc.getBroswerAndVersion().indexOf('Chrome'), bv.substring(6))
// if (bv.indexOf('Chrome') < 0) {
//   window.location.href = "#/OtherPage"
// }
// else if (parseInt(bv.substring(6)) < 79) {
//   window.location.href = "#/OtherPage"

// }
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
