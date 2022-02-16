import React from 'react';
import '../componentsCSS/contact.css';

export default function Contact() {
	return (
        <div className="contact-container">
		<div className="contact">
			<h2>Let's Talanoa</h2>

			<p>I'm always keen to hear about Web Developer opportunities.</p>

			<p className="email">
				<a className="button" href="mailto:gorettialani@gmail.com">Email Me</a>
			</p>
		</div>
        </div>
	);
}
