/* 入口启动文件 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Routers from './routers'
require('../mockconfig.js')
let _ = require('lodash')

ReactDOM.render(
  <Routers/>,
  document.getElementById('root')
)

