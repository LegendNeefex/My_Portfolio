import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer-container">
        <div className="footer-flex">
            <div className="flex">
                <div className="flexA">
                    <h2>Ifeoluwa Oladepo</h2>
                    <p>A creative Designer & Full stack developer</p>
                </div>
                <div className="flexB">
                    <NavLink to="https://github.com/LegendNeefex" target='_blank'>
                        <img src="/images/github.png" alt="GitHub" />
                    </NavLink>
                    <NavLink to="https://www.linkedin.com/in/neefex" target='_blank'>
                        <img src="/images/linkedin.png" alt="LinkedIn" />
                    </NavLink>
                </div>
            </div>
            <h4>Copyright &copy; 2024 - Ifeoluwa Oladepo</h4>
        </div>
    </div>
  )
}

export default Footer