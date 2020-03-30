import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Index from './pages/index/index'
import SubpageIndex from './pages/subpage/index/index'
import SubpageNestIndex from './pages/subpage/nestpage/index'

import './App.scss'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/subpage/" component={SubpageIndex} />
          <Route exact path="/subpage/nest/" component={SubpageNestIndex} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
