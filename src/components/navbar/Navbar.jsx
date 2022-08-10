import { React, useState } from 'react'
import './navbar.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { RiCloseCircleFill, RiMenuFill, RiMenuUnfoldLine, RiMenuFoldLine } from 'react-icons/ri'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faBars } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-scroll'
// import { FaBars } from 'react-icons/fa'
import About from '../about/About'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    AOS.init();
    return (
        <div className='navbar-container'>
            {toggleMenu
                    ? <FontAwesomeIcon icon={faBars} className='navbar-close' data-aos="fade-right" color="#ffffff" size={25} onClick={() => setToggleMenu(false)} />
                    : <FontAwesomeIcon icon={faBarsStaggered} className='navbar-open' color="#ffffff" size={25} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <ul className="navbar-menu-container" data-aos="fade-right" style={{ listStyle: 'none' }}>
                        <Link className='navbar-menu-item' id='first' to="header" spy={true}>Resume</Link>
                        <Link className='navbar-menu-item' to="about" spy={true}>About Me</Link>
                        <Link className='navbar-menu-item' to="education" spy={true}>Education</Link>
                        <Link className='navbar-menu-item' to="experience" spy={true}>Experience</Link>
                        <Link className='navbar-menu-item' to="projects" spy={true}>Projects</Link>
                        <Link className='navbar-menu-item' to="/" spy={true}>Contact</Link>
                    </ul>

                        /* <a className='first' style={{ textDecoration: 'none' }} href='../header/#header'>Resume</a>
                        <a style={{ textDecoration: 'none' }} transition='smooth' href='../about/#about'>About Me</a>
                        <a style={{ textDecoration: 'none' }} transition='smooth' href='../experience/#experience'>Experience</a>
                        <a style={{ textDecoration: 'none' }} transition='smooth' href='/../projects/#projects'>Projects</a>
                        <a style={{ textDecoration: 'none' }} transition='smooth' href='/'>Contact</a> */
                )}
        </div>
    )
}
export default Navbar