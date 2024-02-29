import logo from './logo.svg';
import './App.css';
// import Login from './Component/SignUp';
import Login1 from './Component/Login1';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard } from './Component/Dashboard';

function App() {
  return (
    <div className="App">
      {/* <Router>
         <Routes>
            <Route path="/" element={<Login1 />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
          </Router> */}
          <Login1/>
          <Dashboard/>
    </div>
  );
}

export default App;
