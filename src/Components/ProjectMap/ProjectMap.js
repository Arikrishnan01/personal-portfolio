import React, { useState } from 'react';
import './ProjectMap.css';

export default function ProjectMap({ img, title, desc, link}) {

    const [show, setShow] = useState(false);

  return (
            <a href={link} target='_blank'>
            <div  
                className='projectMap' 
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
            >
                {
                    show ? (
                            <div className='projectMap-content'>
                                <h4>{title}</h4>
                                <p>{desc}</p>
                                <button>Live</button>
                            </div>
                    ) : (
                            <img src={img} alt='project live'/>
                    )
                }
            
            </div>
        </a>
  )
}
