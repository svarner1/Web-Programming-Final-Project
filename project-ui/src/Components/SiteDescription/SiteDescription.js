import "./SiteDescription.css"

export default function SiteDescription() {
    return (
        <div className="siteDescriptionPage">
            <div className="pageTitle">
                <h1> Site Description</h1>
            </div>
            <div className="pageContent">
                <div className="section">
                    <h2 className="sectionTitle">Who Are the Users of the Site?</h2>
                    <p className="sectionContent">
                        The users of the site can be anyone who is interested in keeping track of daily talks
                        or thir day-to-day moods. It is a general use site.
                    </p>
                </div>
                <div className="section">
                    <h2 className="sectionTitle">What Can Users Get out of the Site?</h2>
                    <p className="sectionContent">
                        A user is able keep track of parts of their lives in a fun way!
                    </p>
                </div>
                <div className="section">
                    <h2 className="sectionTitle">What Problem Does the Site Solve?</h2>
                    <p className="sectionContent">
                        This site can aid those who may have trouble keeping track of tasks that need to be completed.
                        The site also can help an individual be more conscious of their daily feelings. Being aware of one's
                        moods is necessary for a person be self-reflective and aware of their needs.
                    </p>
                </div>
                <div className="section">
                    <h2 className="sectionTitle">What Actions can Users Take After Using the Site?</h2>
                    <p className="sectionContent">
                        I think that user's should engage in self-care and find more ways to stay organized.
                    </p>
                </div>
            </div>
        </div>
    )
}