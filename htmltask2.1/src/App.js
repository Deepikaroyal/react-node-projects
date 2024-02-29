import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Leftsidebar from './Leftsidebar/Leftsidebar';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import { RoutesConstant } from './RouteConstant/Constants';
import Login from './Leftsidebar/Pages/Login';
import About from './Leftsidebar/Pages/About';
// import Login from './Leftsidebar/Pages/Login';
// import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
    <BrowserRouter>
     <Header/>
    <Routes>
     
      <Route path={RoutesConstant.Home} element={<Leftsidebar/>} />
      <Route path={RoutesConstant.Login} element={<Login/>} />
      <Route path={RoutesConstant.About} element={<About/>} />
     </Routes>
     </BrowserRouter>
    </>
      
  );
}

export default App;
