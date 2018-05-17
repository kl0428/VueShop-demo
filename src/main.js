// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//main.js 引入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//main.js 引入
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// axios
import Axios from 'axios'

// 配置请求信息
var $http = Axios.create({
  　baseURL: '请联系作者',
  　timeout: '5000',  //请求超时时间
  　headers: {'X-Custom-Header': 'foobar'}     //header传值，例如：Authorization
})
Vue.prototype.axios = $http

Vue.use(MintUI)
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
