import React from 'react';
import './AboutContent.css';
import { Link } from 'react-scroll';
import mernstack from '../../Assets/MERN_ARI_01.pdf';

export default function AboutContent() {
  return (
    <div className='aboutContent'>
        <div className='aboutContent-container'>
            <h1>Mr.Arikrishnan</h1> 
            <p>A FullStack Developer</p>
            <a href={mernstack} target='_blank'>
                <button className='aboutContent-downloadBtn'>Resume</button>
            </a>
            <Link to='projects' smooth={true} duration={500}>
                <button className='aboutContent-workBtn'>My Work</button>
            </Link>
        </div>
    </div>
  )
}
