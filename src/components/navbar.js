import React from 'react';
import '../componentsCSS/navbar.css';

export default function Navbar() {
  return <div className='navbar'>
    <button className='nav-link'>About Me</button>
    <button className='nav-link'>Get in Touch</button>
    <button className='nav-link'>Get my CV</button>
  </div>;
}
