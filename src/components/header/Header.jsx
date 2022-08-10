import React from 'react'
import './header.css'
import Particles from '../particles/Particles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import {Link as Linker} from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import PDF from '../images/Maximilian_Rozano_Resume.pdf'

const Header = () => {
    return (
        <div className='header'>
            <Particles />
            <h1 className='header-name' data-aos="zoom-out-down" data-aos-easing="ease-out" data-aos-duration="2000">MAXIMILIAN ROZANO</h1>
            <h2 className='header-title'>SOFTWARE QA ENGINEER</h2>
            <div className='download-resume-container'>
                <a className='download-resume' href={PDF} download>Download Resumé</a>
            </div>
            {/* <Link to="../about/#about" spy={true} smooth={true} offset={-100} duration={500}>
                <div className='header-icon-container'><FontAwesomeIcon icon={faChevronDown} className="header-icon"/></div>
            </Link> */}
            <div className='header-icon-container'><Link to="about" spy={true}><FontAwesomeIcon icon={faChevronDown} transition='smooth' className="header-icon"/></Link></div>
        </div>
    )
}
export default Header