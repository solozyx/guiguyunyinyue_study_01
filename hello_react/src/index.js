import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, BrowserRouter} from 'react-router-dom'
import App from './App'
// ReactDOM.render(编译渲染的组件, 编译后的组件放置的指定容器);

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'));
