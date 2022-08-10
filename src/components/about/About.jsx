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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quod suscipit labore sunt. Quam necessitatibus expedita unde debitis quo impedit repellendus hic velit enim dolor ducimus, minus fugiat! Atque, quia!</p>
                </div>
            </div>
        </div>
    )
}
export default About