import Vue from 'vue'
import router from "./router";
import axios from 'axios'
Vue.prototype.axios = axios
//根据前端跨域方式做调整
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000
//接口错误拦截  类似于请求拦截器吧
axios.interceptors.response.use(function(response){
  let res = response.data
  //前端和后台商量好的，成功的状态码为0
  if (res.status == 0) {
    return res.data
    //状态码为10表示未登录
  } else if (res.status == 10) {
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})
//统一引入
// import * as API from './api'

import App from './App.vue'

//关闭生产提示
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  // beforeCreate() {
  //   Vue.prototype.$API = API
  // }
}).$mount('#app')
