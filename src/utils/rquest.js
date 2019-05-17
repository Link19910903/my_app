import 'whatwg-fetch'

function fetchApi(url, options, timeout = 15000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('TIME OUT')), timeout)
    fetch(url, options).then(resolve, reject)
  })
}

//encodeURIComponent() 函数可把字符串作为 URI 组件进行编码
function getParams(data) {
    if (!data) return ''
    let params = []
    Object.keys(data).forEach((item, index) => {
      if (Object.prototype.toString.call(data[item]) === '[object Array]') {
        params = data[item].map(node => `${item}[${index}]=${encodeURIComponent(node)}`)
      }
      params.push(`${item}=${encodeURIComponent(data[item])}`)
    })
    return params.length > 0 ? `?${params.join('&')}` : ''
  }

  function generaterParams(url, options) {
    const { params, method } = options
    options.credentials = 'same-origin'
    delete options.parmas
    if (method !== 'GET') {
      options.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...options.headers,
      }
      options.body = JSON.stringify(params)
    } else {
      options.headers = {
        Accept: 'application/json',
        ...options.headers,
      }
      url = `${url}${getParams(params)}`
    }
    return { url, options }
  }

  const methods = ['POST', 'PUT', 'DELETE', 'GET']

  function request(url, options, shouldValidate = true) {
    const { url: newUrl, options: newOptions } = generaterParams(url, options)
    return fetchApi(newUrl, newOptions, 90 * 1000)
      .then(checkStatus)
      .then(result => {
        if (!shouldValidate) return result
        const { result_code: code, result_desc: desc } = result
        if (Number(code) !== 0) {
          message.error(desc)
          const error = new Error(desc)
          error.name = 'request error'
          throw error
        }
        const resultData = {}
        Object.keys(result).forEach(key => { dataMap[key] ? resultData[dataMap[key]] = result[key] : null })
        return resultData
      })
      .catch(e => e)
  }

  methods.forEach(method => {
    const lowerType = method.toLowerCase()
    request[lowerType] = (urlType, type, params) => () => ({
      promise: request(baseUrl, { params: { requestCode: urlType, ...params }, method }),
      type,
    })
  })

  export default request