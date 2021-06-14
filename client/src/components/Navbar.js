import React from "react";
import {Link} from 'react-router-dom';
export default function Navbar (){
return(
    <nav>
        <div className="nav-wrapper white"  >
            <Link to="/" className="brand-logo left">Connector</Link>
            <ul id="nav-mobile" className="right">
                <li><Link to="/"> <i className="material-icons">home</i>
                </Link></li>
                <li><Link to="/create"><i className="material-icons">create</i></Link></li>
                <li><Link to="/profile"><i className="material-icons">person</i></Link></li>
                <li><Link to="/signin">Signin</Link></li>
                <li><Link to="/signup">Signup</Link></li>

            </ul>
        </div>
    </nav>

);
}