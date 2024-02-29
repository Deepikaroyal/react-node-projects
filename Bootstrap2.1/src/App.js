import logo from './logo.svg';
import './App.css';
// import { Component } from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Component/Header';
import Middle from './Component/Middle/Middle';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Middle/>
    </div>
  );
}

export default App;
