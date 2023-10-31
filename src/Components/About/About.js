import React from 'react';
import './About.css';
import { Element } from 'react-scroll';
import AboutContent from '../AboutContent/AboutContent';

export default function About() {
  return (
    <Element name='about' className='about-container'>
        <AboutContent />
    </Element>
  )
}
