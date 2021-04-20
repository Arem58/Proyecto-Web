import React from 'react'
import ReactDOM from 'react-dom'

const App = require('./App')

ReactDOM.hydrate(
  <App />,
  document.getElementById('root'),
)
