


function Services() {
    
  return (
    <div className="services-container" id="services">
        <div className="service-flex" >
            <div className="service-1">
                <div className="line-details">
                    <div className="horizontal-line"></div>
                    <p>MY SERVICES</p>
                </div>
                <h2>What can i do ?</h2>
            </div>
            <div className="service-2">
                <div className="card-flex-1">
                    <div className="card">
                        <i className="fa-solid fa-pen"></i>
                        <h3>UI/UX Design</h3>
                        <p>I specialize in crafting visually compelling designs that communicate clear messages and captivate audiences. My work balances creativity with functionality, ensuring each design is both aesthetically pleasing and user-friendly.</p>
                    </div>
                    <div className="card">
                        <i className="fa-solid fa-life-ring"></i>
                        <h3>Fast Support</h3>
                        <p>i offer expert support to help you diagnose and resolve issues efficiently, minimizing downtime and ensuring your operations continue smoothly.</p>
                    </div>
                    <div className="card">
                        <i className="fa-solid fa-code"></i>
                        <h3>Clean Code</h3>
                        <p>I prioritize writing clean, readable code that is easy to understand and maintain. My code follows industry best practices and conventions, making it easier for teams to collaborate and for future developers to work on</p>
                    </div>
                </div>
                <div className="card-flex-2">
                    <div className="card">
                        <i className="fa-solid fa-briefcase"></i>
                        <h3>Frontend Development</h3>
                        <p>As a Front-End Developer, I build custom front-end solutions using modern frameworks like React. My expertise includes JavaScript development, creating Single Page Applications (SPAs), and integrating APIs for dynamic content. I provide maintenance services, including updates and bug fixes.</p>
                    </div>
                    <div className="card">
                        <i className="fa-solid fa-laptop"></i>
                        <h3>Backend Development</h3>
                        <p>For backend development, I use Node.js, Express, and PostgresDB. I am proficient in building robust and efficient server-side systems. I ensure that data is securely managed and the application runs seamlessly.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services