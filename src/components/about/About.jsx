import React from 'react'
import './about.css'
import Max from '../images/header_photo.JPG'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
    AOS.init();
    return (
        <div className='about'>
            <h2 className='header-title-dark' data-aos="fade-down" data-aos-duration="500">About Me</h2>
            <div className='line-dark' />
            <div className='about-container' data-aos="fade-left" data-aos-duration="1000">
                <img className='about-photo' src={Max} alt='photo'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iste minima, nam quod illo a. Ipsa, ab odio exercitationem id doloremque deleniti, eum pariatur enim voluptatum ratione saepe reprehenderit officiis.</p>
            </div>
        </div>
    )
}
export default About