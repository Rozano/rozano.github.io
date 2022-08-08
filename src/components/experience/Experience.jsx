import React from 'react'
import './experience.css'
import WIT from '../images/wit_new.webp'
import Reggora from '../images/reggora.webp'
import Dolume from '../images/dolume.png'

const Experience = () => {
    return (
        <div className='experience' id='experience'>
            <h2>Experience</h2>
            <div className='experience-container'>
                <img className='experience-logo' src={Reggora} alt='photo'/>
                <h2>Reggora</h2>
                <p>February 2021 - May 2022</p>
                <p>Software QA Engineer</p>
                <p>JOB DESC</p>
                <p>Boston, MA</p>
                <img className='experience-logo' src={WIT} alt='photo'/>
                <h2>Wentworth Institute of Technology</h2>
                <p>September 2020 - December 2020</p>
                <p>Mobile Application Developer</p>
                <p>JOB DESC</p>
                <p>Boston, MA</p>
                <img className='experience-logo' src={Dolume} alt='photo'/>
                <h2>Dolume</h2>
                <p>January 2019 - April 2019</p>
                <p>Technology Consultant Intern</p>
                <p>JOB DESC</p>
                <p>Boston, MA</p>
            </div>
        </div>
    )
}
export default Experience