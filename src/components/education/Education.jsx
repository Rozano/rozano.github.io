import React from 'react'
import './education.css'
import SPP from '../images/spp.png'
import WIT from '../images/wit_new.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Education = () => {
    return (
        <div className='education'>
            <h2 className='header-title-light'>Education</h2>
            <div className='line-light' />
            <div className='education-container'>
                <div className='school-container'>
                    <div className='school' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1000">
                        <img className='school-logo' src={WIT} alt='photo'/>
                        <div className='school-desc-1'>
                            <h3>Wentworth Institute of Technology</h3>
                            <p>September 2016 - December 2020</p>
                        </div>
                    </div>
                    <div className='school-desc-2' data-aos="fade-left" data-aos-easing="ease-out" data-aos-duration="1000">
                        <p>Bachelor's of Science in Computer Science</p>
                        <p>Minor in Applied Mathematics</p>
                        <div className='school-location'>
                            <FontAwesomeIcon icon={faLocationDot} className='school-location-icon' />
                            <p>Boston, MA</p>
                        </div>
                    </div>
                </div>
                <div className='school-container'>
                    <div className='school' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1000">
                        <img className='school-logo' src={SPP} alt='photo'/>
                        <div className='school-desc-1'>
                            <h3>Saint Peter's Preparatory School</h3>
                            <p>September 2012 - May 2016</p>
                        </div>
                    </div>
                    <div className='school-desc-2' data-aos="fade-left" data-aos-easing="ease-out" data-aos-duration="1000">
                        <p>High School Education</p>
                        <div className='school-location'>
                            <FontAwesomeIcon icon={faLocationDot} className='school-location-icon' />
                            <p>Jersey City, NJ</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Education