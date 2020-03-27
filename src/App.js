import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  function test(){
    return 'hogeてすと'
  }

  const test2 = 'asdfjagsdk'

  console.log(props)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {props.aaa.hoge}<br/>
          Edit <code>src/App.js</code> and save to reload.{test()} {test2}
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
  );
}

export default App;
