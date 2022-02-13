import React from 'react';
import '../componentsCSS/navbar.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  return <div className='navbar'>
    {/* <button className='nav-link'>About Me</button>
    <button className='nav-link'>Get in Touch</button>
    <button className='nav-link'>Get my CV</button> */}
  <FaGithub className='icon'/>
    <FaLinkedin className='icon' /> 
    <FaEnvelope className='icon'/> 
  </div>;
}
