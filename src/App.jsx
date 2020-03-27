import React from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Index from './pages/index/index'

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch><Route path="/" component={Index} /></Switch>
      </Router>
    </div>
  )
}

App.defaultProps = {
  aaa: {}
}

App.propTypes = {
  aaa: PropTypes.shape({
    hoge: PropTypes.string
  })
}

export default App
