import { Link as ScrollLink } from 'react-scroll';
import PortfolioContext from '../../context/PortfolioContext';
import { useContext } from 'react';

function Banner() {
    const {theme,themeHandler} = useContext(PortfolioContext)

  return (
        <div className="banner-container" id='home'>
            <div className="banner-flex" >
                <div className="name-details">
                    <h3>Hello, My name is</h3>
                    <h2>Ifeoluwa Oladepo</h2>
                    <div className="line-details">
                        <div className="horizontal-line"></div>
                        <p>A creative Designer & Full stack developer</p>
                    </div>
                    <ScrollLink to="about-me" smooth={true} duration={500} offset={-70}>
                        Know More
                    </ScrollLink>
                </div>
                <div className="div-button" onClick={themeHandler}>
                    <i className={theme ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
                </div>
            </div>
        </div>
    )
}

export default Banner