import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useContext } from 'react';
import PortfolioContext from '../../context/PortfolioContext';
import { NavLink } from 'react-router-dom';

function NavBar() {
    const {ContactOverlayHandler,burgerIcon,setBurgerIcon,burgerIconHandler} = useContext(PortfolioContext)
    const [activeSection, setActiveSection] = useState("home");
    const [showContact, setShowContact] = useState(false);
    const [error,setError] = useState(false)
    const [caret,setCaret] = useState(false)

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
          setError(true)
          setTimeout(() => {
            setError(false)
          }, 1000);
        }).catch((err) => {
          console.error('Failed to copy text: ', err);
        });
      };

    const handleSetActive = (section) => {
        if (burgerIcon) {
            setBurgerIcon(false)
            setActiveSection(section);
        }else{
            setActiveSection(section);
        }        
    };

    const closeHandler = () => {
        setBurgerIcon(false)
    };
    
    const contactShowHandler = () => {
        setShowContact(prev => !prev); // Toggle showContact
        setCaret(prev => !prev); // Toggle caret
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
                <div className="option-container">
                    <div className="top">
                        <div className="name-details">
                            <h2>Ifeoluwa Oladepo</h2>
                            <p>A creative Designer & FullStack Developer</p>
                        </div>
                        <i className="fa-solid fa-xmark" onClick={closeHandler}></i>
                    </div>
                    <ul>
                        <li>
                            <div>
                                <ScrollLink onClick={() => handleSetActive("home")} className={activeSection === "home" ? "active" : ""} to="home" smooth={true} duration={500} offset={-70}>
                                    Home
                                </ScrollLink>
                            </div>
                        </li>
                        <li>
                            <ScrollLink onClick={() => handleSetActive("About")} className={activeSection === "About" ? "active" : ""} to="about-me" smooth={true} duration={500} offset={-70}>
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
                        <div className="div">
                            <li>
                                <ScrollLink to="#" smooth={true} duration={500} offset={-70}>
                                    Contact
                                </ScrollLink>
                                {showContact && (
                                    <>
                                        <div className="phone">
                                            <h3 onClick={() => copyToClipboard('07049657259')} style={{ cursor: 'pointer' }}> 07049657259</h3>
                                            {error && <p>copied!</p>}
                                        </div>
                                        <NavLink to="mailto:mhedheyghold12@gmail.com">
                                            <h3>mhedheyghold12@gmail.com</h3>
                                        </NavLink>
                                    </>
                                )}
                            </li>
                            {
                                caret ? 
                                <i className="fa-solid fa-caret-down" onClick={contactShowHandler}></i>
                                :
                                <i className="fa-solid fa-caret-up" onClick={contactShowHandler}></i>
                            }
                        </div>
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
                    <span className="line"></span>
                    <div className="flexB">
                        <NavLink to="https://github.com/LegendNeefex" target='_blank'>
                            <img src="/images/github.png" alt="GitHub" />
                        </NavLink>
                        <NavLink to="https://www.linkedin.com/in/neefex" target='_blank'>
                            <img src="/images/linkedin.png" alt="LinkedIn" />
                        </NavLink>
                    </div>
                </div>
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