import React from 'react';
import logo from './logo.svg';
import './App.css';

import './components/extractor'
import Extractor from './components/extractor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Extractor />

      </header>
    </div>
  );
}

export default App;
