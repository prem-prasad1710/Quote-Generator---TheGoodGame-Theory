import React from 'react';
import RandomQuote from './components/RandomQuote';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Ron Swanson Quotes</h1>
      </header>
      <RandomQuote />
    </div>
  );
}

export default App;