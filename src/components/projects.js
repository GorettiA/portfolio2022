import React from 'react';
import '../componentsCSS/projects.css';
import { FaFileAlt } from 'react-icons/fa';

function projectLink (){
    return(
        <div className="project-link">
            <a href="https://donalds-dumb-doings.herokuapp.com"></a>
            </div>
    )}

export default function Projects() {
  return <div className='main-body'>
    <div className='body-left'>
    <h2>Talofa Lava!</h2>
    <p>I'm a web developer based in Auckland, New Zealand</p>
    <p>I love to create web apps using ReactJS</p>
    <p><FaFileAlt className='icon'/>Check out my resume</p>
    </div>

  <div className='body-right'>
  <h2>Stuff I've worked on so far...</h2>

  <div className='project'>
    <h4>Having fun Consuming External API's</h4>
    <p>Work in pairs to select an external API and consume it in ReactJS </p>
    <a href="https://donalds-dumb-doings.herokuapp.com" target="_blank" rel="noreferrer">
      <button className="project-link">Donald's Dumb Doings</button>
    </a>
  </div>

  <div className='project'>
    <h4>Final full stack project from Mission Ready HQ</h4>
    <p>A learning management system for teachers to deliver digital
      technologies curriculum - specifically to learn programming, in
      an easy way.
    </p>
    <a href="https://donalds-dumb-doings.herokuapp.com" target="_blank" rel="noreferrer">
      <button className="project-link">Mission X</button>
    </a>
  </div>

  <div className='project'>
    <h4>An ongoing project created in collaboration with my
      classmates at Dev Academy
    </h4>
    <p>A full stack app that allows trainees/apprentices to find work within their
      community for koha.
    </p>
    <a href="https://trainee-jobs-dev.herokuapp.com/" target="_blank" rel="noreferrer">
      <button className="project-link">Trainee Jobs</button>
    </a>
  </div>
  </div>

  </div>
}
