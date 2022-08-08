import React from 'react'
import './education.css'
import SPP from '../images/spp.png'
import WIT from '../images/wit_new.webp'

const Education = () => {
    return (
        <div className='education' id='education'>
            <h2>Education</h2>
            <div className='education-container'>
                    <img className='school-logo' src={WIT} alt='photo'/>
                    <div className='school-container'>
                    <h2>Wentworth Institute of Technology</h2>
                    <p>September 2016 - December 2020</p>
                    <p>Bachelor's of Science in Computer Science, Minor in Applied Mathematics</p>
                    <p>Boston, MA</p>
                </div>
                <div className='school-container'>
                    <img className='school-logo' src={SPP} alt='photo'/>
                    <h2>Saint Peter's Preparatory School</h2>
                    <p>September 2012 - May 2016</p>
                    <p>High School Education</p>
                    <p>Jersey City, NJ</p>
                </div>
            </div>
        </div>
    )
}
export default Education