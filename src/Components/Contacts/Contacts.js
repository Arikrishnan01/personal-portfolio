import React from 'react';
import './Contacts.css';
import { Element } from 'react-scroll';
import { Tooltip, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function Contacts() {

    const iconStyle = {
        color: "white",
        fontSize: "40px",
    }

  return (
    <Element className='contact' name='contact'>
        <h1 className='contact-h1'>Contact</h1>  
        <div className='contact-container'>
            <p>
                Phone : <span>9025133245</span>
            </p>
            <p>
                Email : <span>krishari11052001@gmail.com</span>
            </p>
            <p>
                Github : <span>Arikrishnan01</span>
            </p>
            <div className='contact-container-icons'>
                <a href='https://linkedin.com/in/ari-krishnan-79180b218' target='_blank'>
                    <Tooltip 
                        title="LinkedIn" 
                        arrow
                        enterDelay={500}
                        leaveDelay={200}
                    >
                        <IconButton>
                            <LinkedInIcon className='linkedIn-icon' style={iconStyle}/>
                        </IconButton>
                    </Tooltip>
                </a>
                <a href='https://github.com/Arikrishnan01' target='_blank'>
                    <Tooltip 
                        title="Github" 
                        arrow
                        enterDelay={500}
                        leaveDelay={200}
                    >
                        <IconButton>
                            <GitHubIcon style={iconStyle}/>
                        </IconButton>
                    </Tooltip>
                </a>
                <a href='https://mail.google.com/' target='_blank'>
                    <Tooltip 
                        title="Email" 
                        arrow
                        enterDelay={500}
                        leaveDelay={200}
                    >
                        <IconButton>
                            <EmailIcon style={iconStyle}/>
                        </IconButton>
                    </Tooltip>
                </a>
            </div>
        </div>   
    </Element>
  )
}
