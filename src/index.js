import '@babel/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app'

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

const render = App => {
  ReactDOM.render(
    <React.StrictMode>
      <AppContainer>
        <App />
      </AppContainer>
    </React.StrictMode>,
    document.getElementById('app')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    render(App)
  })
}
