import React from "react";
import { Link } from "react-router-dom";
import './Header.scss';



function Header(){
    return(
    <nav>
<ul className="link_pages">
     <li>
        <Link to= '/Login'>Login</Link>
    </li>

   <li>
        <Link to= '/Dashboard1'>Dashboard1</Link>
    </li>

    <li>
        <Link to= '/Dashboard2'>Dashboard2</Link>
    </li>

    <li>
        <Link to= '/Dashboard3'>Dashboard3</Link>
    </li>

    <li>
        <Link to= '/Dashboard4'>Dashboard4</Link>
    </li>
</ul>
</nav>
    );
}
export default Header;