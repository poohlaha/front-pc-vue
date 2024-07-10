import { BackUrls, RouterUrls } from '@route/urls'
import Utils from '@utils/utils'
import http from '@stores/base'
import { USER } from '@utils/base'
import { CONSTANT } from '@configs/index'

/**
 * 生成公共数据
 * @param url url路径
 * @param data 要传递的json数据, 详见 request/index.js 类前注释
 * @param success: Function, 成功返回
 * @param fail: Function, 失败返回
 * @param methodType: 方法 1: POST 2: GET
 * @param isRefresh 是否上拉刷新或下拉刷新
 * @param isNeedPhone 是否需要手机号
 */
const generateCommonConfig = ({
    url = '',
    data = {},
    success,
    fail,
    methodType = 1,
    isRefresh = false,
  }) => {
  const userInfo = USER.getUserInfo()
  let params = {
    url,
    requestType: isRefresh ? 'refresh' : '',
    data: {
      data: {
        ...data,
      },
    },
    success: (data = {}, resData = {}) => success?.(data || null, resData),
    fail: res => fail?.(res),
    method: methodType === 1 ? 'POST' : 'GET',
  }

  return params
}

// 发送 POST 请求, 参数见上
const sendPost = ({
  url = '',
  data = {},
  success,
  fail,
  isRefresh = false,
}) => http.post(generateCommonConfig({ url, data, success, fail, isRefresh }))

// 发送 GET 请求, 参数见上
const sendGet = ({ url = '', data = {}, success, fail, isRefresh = false }) => {
  // 拼接data参数
  let params = []
  for (let key in data) {
    params.push(`${key}=${data[key]}`)
  }

  url = url + '?' + params.join('&')
  data = {}
  return http.get(generateCommonConfig({ url, data, methodType: 2, success, fail, isRefresh }))
}

// 批量发送, queue: config 列表
const sendBatch = (queue = []) => {
  http.sendBatch(queue)
}

export default {
  sendPost,
  sendGet,
  sendBatch,
  post: http.post,
  get: http.get,
}
