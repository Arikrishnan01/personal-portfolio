import React from 'react';
import './Projects.css';
import { Element } from 'react-scroll';
import recipe_book  from "../../Assets/recipe.png";
import todo_app from "../../Assets/todo.png";
import marriage_app from "../../Assets/marriage-app.png";
import stack_overflow from '../../Assets/overflow.png';
import ProjectMap from '../ProjectMap/ProjectMap';

export default function Projects() {

    const DEPLOY_URL = [
        {
            img: recipe_book,
            title: "recipe-book",
            desc: "This is recipe_book app we can store the recipes. User can manage the our recipe, ingredience",
            link: "https://recipe-book-flame.vercel.app/"
        },
        {
            img: todo_app,
            title: "todo-app",
            desc: "This is app will helpfull for maintain our notes and all kind of things.",
            link: "https://todo-apps-delta.vercel.app/"
        },
        {
            img : marriage_app,
            title: "marriage-app",
            desc: "This is app can usefull for store the new marriage function data",
            link: "https://marriage-app.netlify.app/"
        },
        {
            img : stack_overflow,
            title: "stack-overflow",
            desc: "This is app for stackoverflow app clone. Here users can ask question and comments.. ",
            link: "https://tsackoverflow-clone.netlify.app/"
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
