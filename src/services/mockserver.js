import request from '../utils/rquest'

// const n = (name) => `business/${name}`
// export const fetData = (params) => request.post('GET_ALLDATA', n('getData'), params)

const n = (name) => `/news/${name}`
export const fetData = (params) => request.post('GET_ALLDATA','api',params)