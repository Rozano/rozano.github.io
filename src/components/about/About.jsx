import React from 'react'
import './about.css'
import Max from '../images/header_photo.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <div className='about'>
            <h2 className='header-title-dark'>Profile</h2>
            <div className='line-dark' />
            <div className='about-container' data-aos="fade-up" data-aos-duration="1000">
                <div className='about-info'>
                    <img className='about-photo' src={Max} alt='photo'/>
                    <p>Name: Maximilian Rozano</p>
                    <p>Age: 23</p>
                    <div className='about-location'>
                        <FontAwesomeIcon icon={faLocationDot} className='about-location-icon' />
                        <p>Boston, MA</p>
                    </div>
                </div>
                <div className='about-bio'>
                    <h3>About Me</h3>
                    <p>Howdy, I'm Max. I'm a bit of a software enthusiast, especially when it comes to frontend work. I also have strong fundementals in quality assurance, which is my current occupation and what I hope to continue to grow in.</p>
                    <p>Outside of work, I'm typically either at the gym, playing video games, painting WH40k miniatures, or programming for my own personal growth. Feel free to reach out with any questions - my contact info's at the bottom.</p>
                </div>
            </div>
        </div>
    )
}
export default About