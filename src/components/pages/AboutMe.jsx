
function AboutMe() {
  return (
    <div className="about-container" id="about-me">
        <div className="about-flex" >
            <div className="flex-1">
                <div className="box-outline"></div>
                <img src="/images/image.png" className="rotate-180" alt="passport" />
            </div>
            <div className="flex-2">
                <div className="line-details">
                    <div className="horizontal-line"></div>
                    <p>ABOUT ME</p>
                </div>
                <h2>Who Am I ?</h2>
                <p>My name is Ifeoluwa Oladepo, I’m a dedicated and passionate Full stack Developer based in Lagos, Nigeria, I have cultivated strong foundation in web development through hands-on experience. I have acquired skills necessary to build great and premium websites.</p>
                <p>My experience includes developing and deploying web applications, integrating RESTful APIs, and ensuring cross-browser compatibility, I have a keen eye for detail and a commitment to writing clean, maintainable code.</p>
                <div className="skill-box-container">
                    <div className="skill-flex">
                        <div className="skill-1">
                            <div className="list-1">
                                <p>HTML5</p>
                                <div className="star-rating">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star-half-stroke"></i>
                                </div>
                            </div>
                            <div className="list-1">
                                <p>CSS3</p>
                                <div className="star-rating">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star-half-stroke"></i>
                                </div>
                            </div>
                            <div className="list-1">
                                <p>JavaScript</p>
                                <div className="star-rating">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star-half-stroke"></i>
                                    <i className="fa-solid fa-star outlined-star"></i>
                                </div>
                            </div>
                        </div>
                        <div className="skill-2">
                            <div className="list-1">
                                <p>React.Js</p>
                                <div className="star-rating">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star outlined-star"></i>                                    
                                </div>
                            </div>
                            <div className="list-1">
                                <p>Express.Js</p>
                                <div className="star-rating">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star outlined-star"></i>                                    
                                </div>
                            </div>
                            <div className="list-1">
                                <p>PostgreSQL</p>
                                <div className="star-rating">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star outlined-star"></i>                                    
                                    <i className="fa-solid fa-star outlined-star"></i>                                    
                                </div>
                            </div>
                        </div>
                        <div className="skill-3">
                            <div className="list-1">
                                <p>Node.Js</p>
                                <div className="star-rating">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star outlined-star"></i>  
                                </div>
                            </div>
                            <div className="list-1">
                                <p>Figma</p>
                                <div className="star-rating">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star-half-stroke"></i>
                                    <i className="fa-solid fa-star outlined-star"></i>
                                </div>
                            </div>
                            <div className="list-1">
                                <p>Version Controls</p>
                                <div className="star-rating">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star outlined-star"></i>                                    
                                    <i className="fa-solid fa-star outlined-star"></i>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href='/Document/My-CV.pdf' download="My CV.pdf">
                    DOWNLOAD CV
                </a>
            </div>
        </div>
    </div>
  )
}

export default AboutMe