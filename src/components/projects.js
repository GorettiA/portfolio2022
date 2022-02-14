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
    <a href="https://donalds-dumb-doings.herokuapp.com" target="_blank" rel="noreferrer">
      <button className="project-link">Donald's Dumb Doings</button>
    </a>
  </div>
  </div>

  </div>
}
