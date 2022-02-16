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
						href="https://www.dropbox.com/s/3z2hm5gu3v2lrfy/JenKramerCV.pdf?dl=0"
					>
						Resume
					</a>
				</li>
			</ul>
		</nav>
	);
}
