import axios from 'axios'
import store from '@/store'

const request = axios.create({
  baseURL: 'http://liufusong.top:8080',
  timeout: 3000
})

request.interceptors.request.use(
  (config) => {
    // config中添加token
    const token = store.state.user.token
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  // 请求错误的时候,处理的方法
  (err) => {
    return Promise.reject(err)
  }
)

export default request
