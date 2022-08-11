import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { Link, animateScroll as scroll } from "react-scroll"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-icon-container'><Link to="header" spy={true}><FontAwesomeIcon icon={faAngleUp} transition='smooth' className="footer-icon"/></Link></div>
            <p className='copyright'>Copyright © 2022 Maximilian Rozano</p>
        </div>
    )
}
export default Footer