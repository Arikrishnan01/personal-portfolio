import React from 'react';
import './Skills.css';
import { Element } from 'react-scroll';
import skillsImg  from "../../Assets/bg_06.jpg";
import { LinearProgress } from '@mui/material';

export default function Skills() {

  return (
    <Element className='skills-container' name='skills'>
        <div className='skills-Img'>
            <img src={skillsImg} alt='coder img' />
        </div>
        <div className='skills-text'>
            <h2 className='skills-text-h2'>SKILLSET</h2>
            <div className='skills-container-skillSet'>
                <h5>HTML</h5>
                <div className="skills-container-slider skills-container-slider1">
                    <LinearProgress variant='determinate' color='success'  value={98} />
                </div>
            </div>

            <div className='skills-container-skillSet'>
                <h5>CSS</h5>
                <div className="skills-container-slider skills-container-slider2">
                    <LinearProgress variant='determinate' color='warning' value={90}/>
                </div>
            </div>

            <div className='skills-container-skillSet'>
                <h5>JAVASCRIPT</h5>
                <div className="skills-container-slider skills-container-slider3">
                    <LinearProgress  variant='determinate' color='primary' value={80} />
                </div>
            </div>

            <div className='skills-container-skillSet'>
                <h5>REACTJS</h5>
                <div className="skills-container-slider skills-container-slider4">
                    <LinearProgress variant='determinate' color='info' value={85}/>
                </div>
            </div>

            <div className='skills-container-skillSet'>
                <h5>NODEJS</h5>
                <div className="skills-container-slider skills-container-slider5">
                    <LinearProgress variant='determinate' color='secondary' value={75}/>
                </div>
            </div>

            <div className='skills-container-skillSet'>
                <h5>MONGODB</h5>
                <div className="skills-container-slider skills-container-slider6">
                    <LinearProgress variant='determinate' color='inherit' value={77}/>
                </div>
            </div>
        </div>
    </Element>
  )
}
