import React from 'react'
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

export default App
