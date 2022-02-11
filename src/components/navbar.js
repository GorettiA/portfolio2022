import React from 'react';
import '../componentsCSS/navbar.css';

export default function Navbar() {
  return <div className='navbar'>
    <button className='nav-link'>About</button>
    <button className='nav-link'>Contact</button>
    <button className='nav-link'>Resume</button>
  </div>;
}
