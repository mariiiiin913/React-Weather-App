import React from "react";
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to React</h2>
        <Weather city="New York"/>
      </header>
    </div>
  );
}

export default App;
