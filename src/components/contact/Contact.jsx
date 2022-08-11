import React from 'react'
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faSquarePhone } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <div className='contact'>
            <h2 className='header-title-light'>Contact</h2>
            <div className='line-light' />
            <div className='contact-container'>
                <a className='contact-link' href='mailto:rozanomax@gmail.com?subject="Email from Website"'><FontAwesomeIcon icon={faEnvelope} className="project-icon"/>rozanomax@gmail.com</a>
                <a className='contact-link' id='phone' target='_blank'><FontAwesomeIcon icon={faSquarePhone} className="project-icon"/>908.244.7450</a>
                <a className='contact-link' href='https://www.linkedin.com/in/maxrozano/' target='_blank'><FontAwesomeIcon icon={faLinkedin} className="project-icon"/>Linkedin</a>
                <a className='contact-link' href='https://github.com/Rozano/' target='_blank'><FontAwesomeIcon icon={faGithub} className="project-icon"/>Github</a>
            </div>
        </div>
    )
}
export default Contact