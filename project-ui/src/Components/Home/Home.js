import "./Home.css"
import Hero from "../Hero/Hero"
import toDoListImage from "../../Assets/toDoListJournal.jpg"
import moodTrackerImage from "../../Assets/moods.jpg"

export default function Home(){
    return(
        <div className="Home">
            <Hero/>
            <div className="taglineContainer">
                <h1 className="tagline">Organize your life. Keep track of daily tasks and moods! </h1>
            </div>
            <div className="siteDetailsContainer">
                <div className="siteDetailsInfo">
                    <img className="siteDetailImage" src={toDoListImage} alt="a journal page with a to do list" />
                    <h2>To-Do List</h2>
                </div>
                <div className="siteDetailsInfo">
                    <img className="siteDetailImage" src={moodTrackerImage} alt="a journal page with a to do list" />
                    <h2>Mood Tracker</h2>
                </div>
            </div>
        </div>
    )
}