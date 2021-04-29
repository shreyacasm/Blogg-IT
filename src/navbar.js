import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
const Navbar = () => (
    
    <nav className='navbar'>
        <ul>
            <li className="main-icon">
                <Link>Blogg
                    <span style={{color:" #ffb3b3"}}>It</span>
                </Link>
            </li>
            <li>
                <Link to="/articleslist">Articles</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/">Home</Link>
            </li>
        </ul>
    </nav>
);
export default Navbar;

