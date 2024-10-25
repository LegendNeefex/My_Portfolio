import React from 'react'
import { NavLink } from 'react-router-dom'

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
                <div className="innerflex">
                    <div className="div1">
                        <img src="/images/view.png" alt="recipeApp" />
                        <div className='flexiii'>
                            <div>
                                <h2>Recipe App</h2>
                                <p>Landing Page</p>
                            </div>
                            <NavLink to='https://recipe-app-virid-xi.vercel.app/' target='_blank' className='view-button'>
                                View
                            </NavLink>
                        </div>
                    </div>
                    {/* for future changes add more project below */}
                    {/* <div className="div1">
                        <img src="/images/view.png" alt="recipeApp" />
                        <div className='flexiii'>
                            <div>
                                <h2>Recipe App</h2>
                                <p>Landing Page</p>
                            </div>
                            <NavLink to='https://recipe-app-virid-xi.vercel.app/' target='_blank' className='view-button'>
                                View
                            </NavLink>
                        </div>
                    </div>
                    <div className="div1">
                        <img src="/images/view.png" alt="recipeApp" />
                        <div className='flexiii'>
                            <div>
                                <h2>Recipe App</h2>
                                <p>Landing Page</p>
                            </div>
                            <NavLink to='https://recipe-app-virid-xi.vercel.app/' target='_blank' className='view-button'>
                                View
                            </NavLink>
                        </div>
                    </div> */}
                </div>  
            </div>
            <div className="div2">
                <NavLink to="mailto:mhedheyghold12@gmail.com">
                    Get in touch with neefex
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Projects