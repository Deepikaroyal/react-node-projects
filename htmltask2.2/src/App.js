import logo from './logo.svg';
import './App.css';
import MainLayout from './Mainlayout/Mainlayout';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import { RoutesConstant } from './RouteConstant/RouteConstant';
import Login from './pages/Login';
import About from './pages/About';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path={RoutesConstant.Home} element={<MainLayout/>} />
      <Route path={RoutesConstant.Login} element={<Login/>} />
      <Route path={RoutesConstant.About} element={<About/>} />
      </Routes>
      
      </BrowserRouter>
    

    </div>
  );
}

export default App;
