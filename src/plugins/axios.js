// 用于http请求插件, 使用前先安装
// 参考：https://www.npmjs.com/package/axios
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = '' // 全局设置请求前缀

Vue.use(VueAxios, axios)

// 统一请求拦截器
axios.interceptors.request.use(function (config) {
  if (config.data && config.data.notInterceptors) {
    return
  } else {
    // 全局loding设置
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  // ...
  return Promise.reject(error)
})

// 全局响应拦截器
axios.interceptors.response.use(function (res) {
  let data = res.data
  if (data.status === 'success') {
    return JSON.parse(data.data)
  } else {
    return Promise.reject('数据请求异常')
  }
}, function (err) {
  return Promise.reject(err)
})

export default axios
