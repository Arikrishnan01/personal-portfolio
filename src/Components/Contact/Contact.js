import React from 'react';
import './Contact.css';
import { Element } from 'react-scroll';
import { Tooltip, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact() {

    const iconStyle = {
        color: "white",
        fontSize: "20px",
    }
    const iconStyles = {
        color: "white",
        fontSize: "40px",
    }

  return (
    <Element className='contact-container' name="contact">
        <div className='contact-container-top'>
            <p>get in touch</p>
            <h1>Contact</h1>
        </div>
        <div className='contact-container-bottom'>
            <div className='contact-container-bottom-left'>
                <div>
                    <span>
                        <Tooltip 
                            title="Phone" 
                            arrow
                            enterDelay={500}
                            leaveDelay={200}
                        >
                            <IconButton>
                                <PhoneIcon className='linkedIn-icon' style={iconStyle}/>
                            </IconButton>  
                        </Tooltip>
                    </span><p>9025133245</p>
                </div>
                <div>
                    <span>
                        <Tooltip 
                                title="Email" 
                                arrow
                                enterDelay={500}
                                leaveDelay={200}
                            >
                                <IconButton>
                                    <EmailIcon className='linkedIn-icon' style={iconStyle}/>
                                </IconButton>  
                            </Tooltip>
                    </span><p>krishari11052001@gmail.com</p>
                </div>
                <div>
                    <span>
                        <Tooltip 
                            title="Location" 
                            arrow
                            enterDelay={500}
                            leaveDelay={200}
                        >
                            <IconButton>
                                <LocationOnIcon className='linkedIn-icon' style={iconStyle}/>
                            </IconButton>  
                        </Tooltip>
                    </span><p>Cuddalore, Tamilnadu</p>
                </div>

                <div className='contact-container-bottom-left-icons'>
                    <a 
                        // href='https://linkedin.com/in/ari-krishnan-79180b218' 
                        // target='_blank'
                        onClick={() => window.open(`https://www.linkedin.com/in/arikrishnan01/`)}
                    >
                        <Tooltip 
                            title="LinkedIn" 
                            arrow
                            enterDelay={500}
                            leaveDelay={200}
                        >
                            <IconButton>
                                <LinkedInIcon className='linkedIn-icon' style={iconStyles}/>
                            </IconButton>
                        </Tooltip>
                    </a>
                    <a 
                        // href='https://github.com/Arikrishnan01'
                        // target='_blank'
                        onClick={() => window.open(`https://github.com/Arikrishnan01`)}
                    >
                        <Tooltip 
                            title="Github" 
                            arrow
                            enterDelay={500}
                            leaveDelay={200}
                        >
                            <IconButton>
                                <GitHubIcon style={iconStyles}/>
                            </IconButton>
                        </Tooltip>
                    </a>
                    <a 
                        // href='https://mail.google.com/' 
                        // target='_blank'
                        onClick={() => window.open(`https://mail.google.com/`)}
                    >
                        <Tooltip 
                            title="Email" 
                            arrow
                            enterDelay={500}
                            leaveDelay={200}
                        >
                            <IconButton>
                                <EmailIcon style={iconStyles}/>
                            </IconButton>
                        </Tooltip>
                    </a>
                </div>

            </div>
            <div className='contact-container-bottom-right'>
                <label>Name</label>
                <input type='text'/>
                <label>Email</label>
                <input type='email'/>
                <label>Message</label>
                <textarea></textarea>
                <button>Send</button>
            </div>
        </div>
    </Element>
  )
}
