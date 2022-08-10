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
                    <div className='experience-left'>
                        <img src={Reggora} alt='photo'/>
                        <p>February 2021 - May 2022</p>
                    </div>
                    <div className='experience-desc'>
                        <h3>Reggora</h3>
                        <p>Software QA Engineer</p>
                        <p>JOB DESC</p>
                        <div className='experience-location'>
                            <FontAwesomeIcon icon={faLocationDot} className='experience-location-icon' />
                            <p>Boston, MA</p>
                        </div>
                    </div>
                </div>
                <div className='experience-entry' id='mid'>
                    <div className='experience-left'>
                        <img src={WIT} alt='photo'/>
                        <p>September 2020 - December 2020</p>
                    </div>
                    <div className='experience-desc'>
                        <h3>Wentworth Institute of Technology</h3>
                        <p>Mobile Application Developer</p>
                        <p>JOB DESC</p>
                        <div className='experience-location'>
                            <FontAwesomeIcon icon={faLocationDot} className='experience-location-icon' />
                            <p>Boston, MA</p>
                        </div>
                    </div>
                </div>
                <div className='experience-entry'>
                    <div className='experience-left'>
                        <img src={Dolume} alt='photo'/>
                        <p>January 2019 - April 2019</p>
                    </div>
                    <div className='experience-desc'>
                        <h3>Dolume</h3>
                        <p>Technology Consultant Intern</p>
                        <p>JOB DESC</p>
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