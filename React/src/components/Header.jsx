import React, {useState} from 'react';
import './Header.css'

function Header(props) {
    const [attribute, setAttribute] = useState('home')
    function handlePathClick(paths) {
        if (paths === 'location') {
            setAttribute('location')
        } else if (paths === 'menu') {
            setAttribute('menu')
        } else {
            setAttribute('contact')
        }
    }

    return ( 
      <header className="header">
        <nav className="nav">
            <div className="logo">
                <a href="/" className='logoLink'>Just Steak</a>
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
