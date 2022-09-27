import React from 'react';
import './App.css';
import Header from './features/Header/Header';
import Search from './features/Search/Search';
import Results from './features/Results/Results';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Results />
    </div>
  );
}

export default App;
