import React from 'react';
import '../componentsCSS/footer.css';
import logo from '../images/logo-neon-resized.png';

export default function Footer() {
  return <footer> 
  <img className='footer-logo'src={logo} alt='logo'/>   
  <ul>
    <li>
      <a href="https://www.linkedin.com/in/goretti-alani" target="_blank" rel="noreferrer">
        <span className="fab fa-linkedin" aria-hidden="true"></span>
        <span className="sr-only">LinkedIn</span>
      </a>
    </li>
    <li>
      <a href="https://www.github.com/GorettiA" target="_blank" rel="noreferrer">
        <span className="fab fa-github-square" aria-hidden="true"></span>
        <span className="sr-only">Github</span>
      </a>
    </li>
    <li>
      <a href="mailto:gorettialani@gmail.com">
        <span className="fas fa-envelope" aria-hidden="true"></span>
        <span className="sr-only">Email</span>
      </a>
    </li>
  </ul>
  <p><small>&copy; 2022 Goretti Alani</small></p>
</footer>
}
