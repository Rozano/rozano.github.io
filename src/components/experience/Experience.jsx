import React from 'react'
import './experience.css'
import WIT from '../images/wit_new.webp'
import Reggora from '../images/reggora.webp'
import Dolume from '../images/dolume.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Experience = () => {
    return (
        <div className='experience'>
            <h2 className='header-title-dark'>Experience</h2>
            <div className='line-dark' />
            <div className='experience-container'>
                <div className='experience-entry'>
                    <div className='experience-left' data-aos="zoom-in" data-aos-easing="ease-out" data-aos-duration="1000">
                        <img src={Reggora} alt='photo'/>
                        <p>February 2021 - May 2022</p>
                    </div>
                    <div className='experience-desc' data-aos="flip-left" data-aos-easing="ease-out" data-aos-duration="1000">
                        <h3>Reggora</h3>
                        <p><i>Software QA Engineer</i></p>
                        <p>Tested new features and fixes locally, in development, staging, and production across multiple teams. Devised and executed 100+ cohesive, detailed manual test plans for new features being developed across web
                            and mobile platforms. Verified and manipulated data using MongoDB for certain test scenarios. Developed frontend platform features in React.js affecting 50,000+ daily users. Spearheaded UI/UX initiative with Tech Lead and Product Designer to revamp Appraiser platform.</p>
                        <div className='experience-location'>
                            <FontAwesomeIcon icon={faLocationDot} className='experience-location-icon' />
                            <p>Boston, MA</p>
                        </div>
                    </div>
                </div>
                <div className='experience-entry' id='mid'>
                    <div className='experience-left' data-aos="zoom-in" data-aos-easing="ease-out" data-aos-duration="1000">
                        <img src={WIT} alt='photo'/>
                        <p>September 2020 - December 2020</p>
                    </div>
                    <div className='experience-desc' data-aos="flip-left" data-aos-easing="ease-out" data-aos-duration="1000">
                        <h3>Wentworth Institute of Technology</h3>
                        <p><i>Mobile Application Developer</i></p>
                        <p>Developed mobile application using Android Studio to cater to individuals intending to use Traditional Chinese Medicine’s tongue diagnosis via mobile camera. Worked closely with partner and professor to ensure application could recognize tongues using PyTorch and convolutional neural networks.</p>
                        <div className='experience-location'>
                            <FontAwesomeIcon icon={faLocationDot} className='experience-location-icon' />
                            <p>Boston, MA</p>
                        </div>
                    </div>
                </div>
                <div className='experience-entry'>
                    <div className='experience-left' data-aos="zoom-in" data-aos-easing="ease-out" data-aos-duration="1000">
                        <img src={Dolume} alt='photo'/>
                        <p>January 2019 - April 2019</p>
                    </div>
                    <div className='experience-desc' data-aos="flip-left" data-aos-easing="ease-out" data-aos-duration="1000">
                        <h3>Dolume</h3>
                        <p><i>Technology Consultant Intern</i></p>
                        <p>Oversaw dozens of employee tickets with Spiceworks, communicated between multiple partners for network management, and created thin clients for employee usage. Developed a communication network to replace pagers to improve contact. Maintained clients’ servers and access points.</p>
                        <div className='experience-location'>
                            <FontAwesomeIcon icon={faLocationDot} className='experience-location-icon' />
                            <p>Boston, MA</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Experience