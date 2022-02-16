import React from 'react';
import '../componentsCSS/navbar.css';

export default function Navbar() {
	return (
		<nav className="navbar">
			<ul>
				<li>
					<h1>
						<a href="index.html">Goretti Alani</a>
					</h1>
				</li>
				<li>
					<a href="#projects">Projects</a>
				</li>
				<li>
					<a href="about.html">About</a>
				</li>
				<li>
					<a href="#contact">
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
		</nav>
	);
}
