import React, { useContext } from 'react'
import NavBar from './components/pages/NavBar'
import Banner from './components/pages/Banner'
import AboutMe from './components/pages/AboutMe'
import Services from './components/pages/Services'
import ContactOverlay from './components/pages/ContactOverlay'
import PortfolioContext from './context/PortfolioContext'
import Footer from './components/pages/Footer'
import Projects from './components/pages/Projects'

function AllFiles() {
    const {theme} = useContext(PortfolioContext)
    return (
        <div>
            <NavBar/>
            <ContactOverlay />
            <Banner/>
            <div className={theme ? "dark" : "light"}>
                <AboutMe />
                <Services/>
                <Projects />
                <Footer />
            </div>
        </div>
    )
}

export default AllFiles