import '../public/index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Root from './components/Root'
import store from './redux'

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('app')
)