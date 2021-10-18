import { HttpRequest, HttpContentType, createGetHook, createPostHook } from 'muni-http'

const http = HttpRequest.create()
  .setBaseURL('https://hy.zhangzhe.icu/api/')
  .setContentType(HttpContentType.form)

http.beforeRequest(() => {
  console.log('请求中...')
})

export const get = createGetHook(http)

export const post = createPostHook(http)

export default http
