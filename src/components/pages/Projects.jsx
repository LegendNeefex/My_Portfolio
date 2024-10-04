import React from 'react'
import { NavLink } from 'react-router-dom'
import { BarLoader } from 'react-spinners'

function Projects() {
  return (
    <div className="project-container" id="projects">
        <div className="project-flex">
            <div className="flexi">
                <div className="line-details">
                    <div className="horizontal-line"></div>
                    <p>My Projects</p>
                </div>
                <h2>Projects i have worked on ?</h2>
            </div>
            <div className="flexii">
                <div className="bar-loader-top">
                    <BarLoader className="linesT" color="#fff" width={"1300px"} />
                </div>
                <div className="bar-loader-left">
                    <BarLoader className="linesL" color="#fff" width={"400px"} />
                </div>

                <div className="innerflex">
                    <div className="div1">
                        <h1>Coming SOON !</h1>
                        <p>I'm currently working on some exciting projects! Stay tuned for updates.</p>
                    </div>
                    <div className="div2">
                        <h3 style={{ textDecoration: 'underline' }}>OR</h3>
                        <NavLink to="mailto:mhedheyghold12@gmail.com">
                            Get in touch
                        </NavLink>
                    </div>
                </div>
                <div className="bar-loader-right">
                    <BarLoader className="linesR" color="#fff" width={"400px"} />
                </div>
                <div className="bar-loader-bottom">
                    <BarLoader className="linesB" color="#fff" width={"1300px"} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects