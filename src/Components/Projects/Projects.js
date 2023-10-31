import React from 'react';
import './Projects.css';
import { Element } from 'react-scroll';
import ipl_clone_img  from "../../Assets/ipl-clone.png";
import find_meals from "../../Assets/find-meals.png";
import marriage_app from "../../Assets/marriage-app.png";
import hotel_bokking from '../../Assets/bg_07.png';
import ProjectMap from '../ProjectMap/ProjectMap';

export default function Projects() {

    const DEPLOY_URL = [
        {
            img: ipl_clone_img,
            title: "ipl-clone",
            desc: "This is ipl-clone app we can store the every ipl teams and teams players data",
            link: "https://ipl-clone-app.netlify.app/"
        },
        {
            img: find_meals,
            title: "find-meals",
            desc: "This is app will helpfull for find your favourite food and can watch making vedio from youtube",
            link: "https://meals-finder-app.netlify.app/"
        },
        {
            img : marriage_app,
            title: "marriage-app",
            desc: "This is app can usefull for store the new marriage function data",
            link: "https://marriage-app.netlify.app/"
        },
        {
            img : hotel_bokking,
            title: "hotel-bokking",
            desc: "This is app can usefull for store the new checkin and chechout customers details",
            link: "https://hotel-booking-register.vercel.app//"
        }
    ]

  return (
    <Element className='projects-container' name='projects'>
        <h1 className='projects-container-h1'>Projects</h1>
        <p>
            Here everyone can able see the live project
        </p>
        <div className='projects-container-projects'>
            {
                DEPLOY_URL.map((project) => {
                    return(
                        <ProjectMap 
                            key={project.id}
                            img={project.img}
                            title={project.title}
                            desc={project.desc}
                            link={project.link}
                        />
                    )
                })
            }
        </div>
    </Element>
  )
}
