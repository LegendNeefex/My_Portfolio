import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useContext } from 'react';
import PortfolioContext from '../../context/PortfolioContext';

function NavBar() {
    const {ContactOverlayHandler,burgerIcon,burgerIconHandler} = useContext(PortfolioContext)
    const [activeSection, setActiveSection] = useState("home");

    const handleSetActive = (section) => {
        setActiveSection(section);
    };

  return (
    <div className="nav-container">
        <div className="nav-flex">
        <div className="nav-details">
            <a href="/">
                <h2 className='logo'>Neefex .</h2>
            </a>
            <ul>
                <li>
                    <div>
                        <ScrollLink onClick={() => handleSetActive("home")} className={activeSection === "home" ? "active" : ""} to="home" smooth={true} duration={500} offset={-70}>
                            Home
                        </ScrollLink>
                    </div>
                </li>
                <li>
                    <ScrollLink onClick={() => handleSetActive("About")}className={activeSection === "About" ? "active" : ""} to="about-me" smooth={true} duration={500} offset={-70}>
                        About
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink onClick={() => handleSetActive("Services")} className={activeSection === "Services" ? "active" : ""} to="services" smooth={true} duration={500} offset={-70}>
                        Services
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink onClick={() => handleSetActive("Projects")} className={activeSection === "Projects" ? "active" : ""} to="projects" smooth={true} duration={500} offset={-70}>
                        Projects
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink to="#" smooth={true} duration={500} offset={-70} onClick={ContactOverlayHandler}>
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
        {
            burgerIcon ?
            <>
                <p>true</p>
            </>
            :
            <>
                <div className="burgericon" onClick={burgerIconHandler}>
                    <span className="line"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>   
            </>
        }
        </div>
    </div>
  )
}

export default NavBar