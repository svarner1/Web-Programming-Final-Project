import "./AboutUs.css"

export default function AboutUs() {
    return (
        <div className="aboutUsPage">
            <div className="pageTitle">
                <h1>About Us</h1>
            </div>
            <div className="pageContent">
                <div className="section">
                    <h2 className="sectionTitle">About Me</h2>
                    <p className="sectionContent">
                        My name is Sydney Varner, and I am currently a third-year computer science student at 
                        Georgia State University. I was born and raised in Atlanta, and I currently live on the
                        downtown Atlanta GSU campus.
                    </p>
                </div>
                <div className="section">
                    <h2 className="sectionTitle">Project Description</h2>
                    <p className="sectionContent">
                        This project is a simple site that provides a to-do list and mood tracker for users. 
                        Users can create a to-do list item that includes text, a chosen priority-level, and the
                        list item category. Users can also create a mood entry item that includes text and a chosen 
                        mood. I chose this project because I thought it might be useful for a wide variety of 
                        people, especially those with busy lives.
                    </p>
                </div>
                <div className="section">
                    <h2 className="sectionTitle">Technology Description</h2>
                    <p className="sectionContent">
                        To create my site, I used the PERN stack (PostgreSQl, Express, React, and Node.js). 
                        PostgreSQl is an open-source database management system. I used PostgreSQL to easily
                        manipulate my SQL database. Express is a backend framework that I used to create all
                        my HTTP endpoints. React is a JavaScript library for user interface. I used it to
                        create the pages of my site. Node.js is a JavaScript runtime environment. Through the
                        platform I was able to create both my backend and frontend
                    </p>
                </div>
                <div className="section">
                    <h2 className="sectionTitle">What I Have Learned in Web Programming</h2>
                    <p className="sectionContent">
                        Through this class, I learned a lot about self-learning and what it entails. It involves
                        being self-driven in seeking out the best plan to gain knowledge. I also both learned and 
                        deepend my knowledge about numerous technologies including SQL, HTML, CSS, JavaScript,
                        WordPress, AWS, and PHP.

                    </p>
                </div>
            </div>
        </div>
    )
}