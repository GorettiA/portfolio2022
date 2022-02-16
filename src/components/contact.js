import React from 'react';
import '../componentsCSS/contact.css';

export default function Contact() {
	return (
        <div className="contact-container">
			<div className="gradient"></div>
		<div className="contact">
			<h2>Let's Talanoa!</h2>

			<p>I'm keen to hear about any Web Development opportunities or ideas you might have so get in touch!
			</p>

			<p className="email">
				<a className="button" href="mailto:gorettialani@gmail.com">Email Me</a>
			</p>
		</div>
		<div className="gradient"></div>
        </div>
	);
}
