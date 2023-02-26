import React from 'react';
import logo from './logo.svg';
import './App.css';
import LogoBar from './components/layout/logoBar';
import Home from './components/home/home'

function App() {
  return (
    <div className="App">
      <div className="logoBar"><LogoBar /></div>
      
      <Home />
    </div>
  );
}

export default App;
