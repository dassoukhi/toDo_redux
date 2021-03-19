import React from 'react';
import '../../App.css';
import logo from '../../logo.svg';


const Header = props =>{
    return (<header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      {props.label}
    </p>

    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
    <button onClick={props.press} >Click me</button>
  </header>)
}

export default Header;