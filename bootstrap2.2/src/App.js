import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Component from './Component/Component';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import {  RoutesConstant }from './Constants/Constants';

import Accordion from './Component/Accordion/Accordion';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Component/> */}
      <Routes>
      <Route path={RoutesConstant.Crousel} element={<Component/>} />
      <Route path={RoutesConstant.Accordion} element={<Accordion/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
  }

export default App;
