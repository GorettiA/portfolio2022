import React from 'react';
import logo from '../images/logo-neon-resized.png';

export default function Header() {
  return <div className='header'>
    <img className='logo'src={logo} alt='logo'/>    
  </div>;
}
