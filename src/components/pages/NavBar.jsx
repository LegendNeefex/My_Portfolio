import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useContext } from 'react';
import PortfolioContext from '../../context/PortfolioContext';

function NavBar() {
    const {ContactOverlayHandler} = useContext(PortfolioContext)
  return (
    <div className="nav-container">
        <div className="nav-flex">
            <div className="nav-details">
                <NavLink to="/" className="activeclassname">
                    <h2 className='logo'>Neefex .</h2>
                </NavLink>
                <ul>
                    <li>
                        <div>
                            <ScrollLink to="home" smooth={true} duration={500} offset={-70}>
                                Home
                            </ScrollLink>
                        </div>
                    </li>
                    <li>
                        <ScrollLink to="about-me" smooth={true} duration={500} offset={-70}>
                            About
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="services" smooth={true} duration={500} offset={-70}>
                            Services
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="" smooth={true} duration={500} offset={-70} onClick={ContactOverlayHandler}>
                            Contact
                        </ScrollLink>
                    </li>
                    <li>
                        <a href='/Document/My-CV.pdf' download="My CV.pdf">
                            <div className="text-flex">
                                <div className='download'>
                                    Download
                                </div>
                                <div className='resume'>
                                    Resume
                                </div>
                            </div>
                        </a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default NavBar