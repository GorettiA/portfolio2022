import React from 'react';
import '../componentsCSS/projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';


const contact = <FontAwesomeIcon icon={faCoffee} />
const user = <FontAwesomeIcon icon={faUser} />




export default function Projects() {
  return <div className='main-body'>
    <div className='body-left'>
    <h2>Talofa Lava!</h2>
    <p>I'm a web developer based in Auckland, New Zealand</p>
    <p>{contact}</p>
    <p>{user}</p>
    </div>

  <div className='body-right'>
  <h2>My Work</h2>

  <div className='project'>
    <p>project 1</p>
  </div>
  </div>

  </div>
}
