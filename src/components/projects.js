import React from 'react';
import '../componentsCSS/projects.css';
import Rookie from '../images/resized-rookie.png';
import Donald from '../images/donaldAPI.jpg';
import MissionX from '../images/mission-x.jpg';
import Calculator from '../images/calculator.jpg';

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
							<li>Auth0</li>
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
							<li>API's</li>
							<li>Express.js</li>
							<li>Heroku</li>
						</ul>
					</div>
					<img className="project-image" src={Donald} alt="DDD." />
				</article>

				<article>
					<div className="description-container">
						<h4>Mission Ready HQ Project</h4>
						<h3>Mission X</h3>
						<p className="project-text">
							<a href="x" target="_blank" rel="noreferrer">
								Mission X
							</a>{' '}	
							was our final group project at Mission Ready HQ. It is a full stack app aimed at helping to make 
							coding a fun learning experience for children. I worked on the login page, and was the team's
							database administrator. Styling was done using Material UI.
						</p>
						<h4>Technologies used include:</h4>
						<ul>
							<li>ReactJS</li>
							<li>Material UI</li>
							<li>Node JS</li>
							<li>Express JS</li>
							<li>MySQL</li>
							<li>AWS</li>
						</ul>
					</div>
					<img className="project-image" src={MissionX} alt="mission-x." />
				</article>

				<article>
					<div className="description-container">
						<h4>Solo Project</h4>
						<h3>A Calculator</h3>
						<p className="project-text">
							<a href="https://goretti-reactjs-calculator.herokuapp.com/" target="_blank" rel="noreferrer">
								A Calculator
							</a>{' '}	
							was a solo project I built using ReactJS and state manaagement with React Redux. 
							It was a code along with an amazing tutorial on YouTube and I enjoyed it because it 
							meant I got to practice JS - specifically switch statements. Also I practiced how to
							layout using CSS grid. Also let's face it - is it even a portfolio if you don't have a JS calculator?
						</p>
						<h4>Technologies used include:</h4>
						<ul>
							<li>ReactJS</li>
							<li>Redux</li>
							<li>CSS</li>
							<li>Heroku</li>
						</ul>
					</div>
					<img className="project-image" src={Calculator} alt="calculator" />
				</article>

			</div>
		</div>
	);
}
