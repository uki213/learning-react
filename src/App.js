import React from 'react'
import PropTypes from 'prop-types'
import logo from './logo.svg'
import './App.css'

function App({ aaa }) {
  function test() {
    return 'hogeてすと'
  }

  const test2 = 'asdfjagsdk'

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {aaa.hoge}
          <br />
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
          {test()}
          {' '}
          {test2}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
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
