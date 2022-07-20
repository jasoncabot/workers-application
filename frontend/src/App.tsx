import React from 'react';
import logo from './logo.svg';
import './App.css';
import { greeter } from "@app/shared";

function App() {
  const message = greeter();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message}
        </p>
      </header>
    </div>
  );
}

export default App;
