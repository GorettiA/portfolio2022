import React from 'react';
import '../componentsCSS/header.css';
import logo from '../images/logo-neon-resized.png';
import Avatar from '../images/avatar.jpg';

export default function Header() {
  return <div className='header'>  
    <img className='avatar'src={Avatar} alt='goretti'/>   
  </div>;
}
