import React from 'react';
import '../componentsCSS/projects.css';
import Rookie from '../images/version3.png';
import Donald from '../images/donaldAPI.jpg';

export default function Projects() {
	return (
		<div className="projects-container">
			<div className="projects">
				<h2>Stuff I've Worked On</h2>
				<article>
					<div className="description-container">
						<h4>Latest Project</h4>
						<h3>Book A Rookie</h3>
						<p className="project-text">
							<a href="https://trainee-jobs-dev.herokuapp.com/" target="_blank" rel="noreferrer">
								Book A Rookie
							</a>{' '}
							is an ongoing project. What was originally pitched as a final group project idea at
							Dev Academy has since morphed into a labour of love between friends. A full stack web
							app for apprentices and fresh graduates to find work within their community in order
							to gain experience in their chosen field. The work is paid through koha.
						</p>
						<h4>Technologies used include:</h4>
						<ul>
							<li>ReactJS</li>
							<li>Redux Toolkit</li>
							<li>Knex</li>
							<li>CI/CD</li>
							<li>Heroku</li>
						</ul>
					</div>
					<img className="project-image" src={Rookie} alt="Trainee Jobs." />
				</article>

				<article>
					<div className="description-container">
						<h4>Bootcamp Project</h4>
						<h3>Donald's Dumb Doings</h3>
						<p className="project-text">
							<a href="https://donalds-dumb-doings.herokuapp.com/" target="_blank" rel="noreferrer">
								Donald's Dumb Doings
							</a>{' '}	
							was a project where we built a front end app to practice consuming external API's.
							Working in pairs, this little project was how we spent an afternoon at Dev Academy.
							Time flies when you're having fun! Oh heads up - some of the content might be NSFW!
						</p>
						<h4>Technologies used include:</h4>
						<ul>
							<li>ReactJS</li>
							<li>Webpack</li>
							<li>Heroku</li>
						</ul>
					</div>
					<img className="project-image" src={Donald} alt="DDD." />
				</article>
			</div>
		</div>
	);
}
