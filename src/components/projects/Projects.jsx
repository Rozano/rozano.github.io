import React from 'react'
import './projects.css'
import MCPHS from '../images/tedx_mcphs.png'
import Rozano from '../images/header_photo.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const Projects = () => {
    return (
        <div className='projects'>
            <h2 className='header-title-light'>Projects</h2>
            <div className='line-light' />
            <div className='projects-container'>
                <div className='project-entry' data-aos="fade-right" data-aos-duration="1000">
                    <img className='project-photo' src={MCPHS} alt='photo'/>
                    <a className='project-link' href='https://github.com/Rozano/tedxmpchs' target='_blank'><FontAwesomeIcon icon={faGithub} className="project-icon"/>Github</a>
                    <a className='project-link' id='second-button' href='https://tedxmpchs.vercel.app/' target='_blank'>Website</a>
                    <div className='project-desc'>
                        <h3>TEDxMCPHS</h3>
                        <div className='line-dark-lite' />
                        <p>Designed, programmed, and managed the website for TEDxMCPHS' event in 2020 that sold over 300 tickets. Initially, it was purely HTML/CSS with small fragments of JS, but I was approached but the club in 2021 to update the website for their 2022 event. I decided to take this opportunity to redesign the website using React, and this was the result.</p>
                    </div>
                </div>
                <div className='project-entry' data-aos="fade-left" data-aos-duration="1000">
                    <img className='project-photo' src={Rozano} alt='photo'/>
                    <div className='project-buttons'>
                        <a className='project-link' href='https://github.com/Rozano/website' target='_blank'><FontAwesomeIcon icon={faGithub} className="project-icon"/>Github</a>
                        <a className='project-link' id='second-button' href='https://github.com/Rozano/website' target='_blank'>Website</a>
                    </div>
                    <div className='project-desc'>
                        <h3>Personal Website</h3>
                        <div className='line-dark-lite' />
                        <p>This project is the website you're currently browsing. I figured it was about time I created my own personal website to help with my job search. With the experience I gained from TEDxMCPHS, I figured I had gotten the basics of programming React websites to design my own.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects