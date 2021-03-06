import React from 'react';
import '../componentsCSS/navbar.css';
import logo from '../images/logo-neon-resized.png';

export default function Navbar() {
	return (
		<nav className="navbar">
			<ul>
				<li>
					<h1>
					<img className="logo"src={logo} alt="goretti"></img>
						{/* <a href="index.html">Home</a> */}
					</h1>
				</li>
				<li>
					<a href="projects.js">Projects</a>
				</li>
				<li>
					<a href="about.js">About</a>
				</li>
				<li>
					<a href="mailto:gorettialani@gmail.com">
						<span className="fa-solid fa-envelope" aria-hidden="true"></span>
						<span className="sr-only">Contact</span>
					</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/in/goretti-alani/" target="_blank" rel="noreferrer">
						<span class="fa-brands fa-linkedin" aria-hidden="true"></span>
						<span className="sr-only">LinkedIn</span>
					</a>
				</li>
				<li>
					<a href="https://www.github.com/GorettiA" target="_blank" rel="noreferrer">
						<span class="fa-brands fa-github" aria-hidden="true"></span>
						<span className="sr-only">Github</span>
					</a>
				</li>
				<li>
					<a
						className="button"
						href="https://drive.google.com/file/d/1AIiADYDipX6Afl8ISjAOX8GT2v6T0b-7/view?usp=sharing" target="_blank" rel="noreferrer">
						Resume
					</a>
				</li>
			</ul>
			<div className="gradient-nav"></div>
		</nav>
	);
}
