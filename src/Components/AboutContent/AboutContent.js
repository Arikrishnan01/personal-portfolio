import React from 'react';
import './AboutContent.css';
import { Link } from 'react-scroll';

export default function AboutContent() {
  return (
    <div className='aboutContent'>
        <div className='aboutContent-container'>
            <h1>Mr.Arikrishnan</h1> 
            <p>A FullStack Developer</p>
            <a href='www.google.com'>
                <button className='aboutContent-downloadBtn'>Download CV</button>
            </a>
            <Link to='projects' smooth={true} duration={500}>
                <button className='aboutContent-workBtn'>My Work</button>
            </Link>
        </div>
    </div>
  )
}
