import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import {Route, Routes } from 'react-router-dom'; 
import { render } from 'react-dom';
import About from './myComponents/About';
import Shop from './myComponents/Shop';
import Nav from './myComponents/Nav';
import Albert from './myComponents/Albert';


function App() {
  return (
  
       <BrowserRouter>
       <div className='App'>
           <Nav />
           <Routes>

{/*           
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
      </Route> */}

           <Route path='/' exact  element={<Home />}/> 
      
            <Route path='/About'  element={<About />} />
            <Route path='/About/Albert'  element={<Albert />} />
            <Route path='/Shop' element={<Shop />}/>
           </Routes>
       </div>
       </BrowserRouter>    
  );
}

const  Home =  () => (
  <div>
  <h1>I am Home Page!</h1>
  </div>
);


/*
class App extends React.Component{
  render(){
     return(
       <>
         <BrowserRouter>
               <Nav />
               <Routes>
                 <Route path='/' element={<About />}></Route>
               </Routes>
         </BrowserRouter>
       </>
     )
  }
}*/

export default App;