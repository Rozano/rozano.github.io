import { React, useState} from 'react'
import './navbar.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { RiCloseCircleFill, RiMenuFill, RiMenuUnfoldLine, RiMenuFoldLine } from 'react-icons/ri'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faBars } from '@fortawesome/free-solid-svg-icons'
// import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    AOS.init();

    return (
        <div className='navbar-container'>
            {toggleMenu
                    ? <FontAwesomeIcon icon={faBars} className='navbar-close' data-aos="fade-right" color="#ffffff" size={25} onClick={() => setToggleMenu(false)} />
                    : <FontAwesomeIcon icon={faBarsStaggered} className='navbar-open' color="#ffffff" size={25} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="navbar-menu-container" data-aos="fade-right">
                            <a className='first' style={{ textDecoration: 'none' }} href='/'>Resume</a>
                            <a style={{ textDecoration: 'none' }} href='./'>About Me</a>
                            <a style={{ textDecoration: 'none' }} href='./'>Experience</a>
                            <a style={{ textDecoration: 'none' }} href='/'>Projects</a>
                            <a style={{ textDecoration: 'none' }} href='/'>Contact</a>
                    </div>
                )}
        </div>
    )
}
export default Navbar