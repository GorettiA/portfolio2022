import React from 'react';
import '../componentsCSS/footer.css';

export default function Footer() {
  return <footer>
  <h2>Goretti Alani &middot; Web Developer</h2>
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
  <p><small>&copy; 2022 Goretti Alani. All rights reserved.</small></p>
</footer>
}
