import React from 'react';
import './Header.css'

function Header() {
    return ( 
      <header className="header">
        <nav className="nav">
            <div className="logo">
                <a href="/" className='logoLink'>Logo</a>
            </div>
            <ul className='navMenu'>
                <li className="navItem">
                    <a href="/location" className='navLink'>Location</a>
                </li>
                <li className="navItem">
                    <a href="/menu" className='navLink'>Menu</a>
                </li>
                <li className="navButton">
                    <a href="/location" className='navLink'>Book</a>
                </li>
            </ul>
        </nav>
      </header>
    );
}

export default Header;
