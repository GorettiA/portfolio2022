import React from 'react';
import '../componentsCSS/projects.css';
import { FaFileAlt } from 'react-icons/fa';


export default function Projects() {
  return <div className='main-body'>
    <div className='body-left'>
    <h2>Talofa Lava!</h2>
    <p>I'm a web developer based in Auckland, New Zealand</p>
    <p>I love to create web apps using ReactJS</p>
    <p><FaFileAlt className='icon'/>Check out my resume</p>
    </div>

  <div className='body-right'>
  <h2>My Work</h2>

  <div className='project'>
    <p>project 1</p>
  </div>
  </div>

  </div>
}
