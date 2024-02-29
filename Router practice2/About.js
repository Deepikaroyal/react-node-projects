import React from 'react';
import { Link } from 'react-router-dom';
 import Albert from './Albert';
 import { getInvoices } from '../Data';
//import './App.css';


function About() {
  let invoices = getInvoices();
  return (
    <div className='about-link'>
      {/* <h1>I'm About Page!</h1>
   <ul className='about-link'>
       <Link to='Albert'>
          <li>Albert</li>
          </Link>
     <br/>

     <li>John</li><br/>
     <li>Maria</li>
     
   </ul> */}
      
{invoices.map((invoice) =>(
<Link
style={{ display: "block", margin: "1rem 0" }}
to={`/About/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </Link>
        ))}


    </div>
  );
}

export default About;