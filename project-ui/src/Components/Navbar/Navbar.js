import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav className="Navbar">
            <div className="content">
                <div className="siteName">
                    <h1> Site Name </h1>
                </div>
                <ul className="links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About Us</Link>
                    </li>
                    <li>
                        <Link to="/">Site Description</Link>
                    </li>
                    <li>
                        <Link to="/">Checklist</Link>
                    </li>
                    <li>
                        <Link to="/">Log In</Link>
                    </li>
                    <li>
                        <Link to="/">Sign Up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}




{/* {user?.email ? (
    <>
        <li>
            <Link to="/toDoList">To-Do List</Link>
        </li>
        <li>
            <Link to="/moodTracker">Mood Tracker</Link>
        </li>
        <li>
            <Link to="/">Site Details</Link>
        </li>
        <li>
            <Link to="/">Sign Out</Link>
        </li>
    </>
):(
    <>
        <li>
            <Link to="/">About Us</Link>
        </li>
        <li>
            <Link to="/">Site Description</Link>
        </li>
        <li>
            <Link to="/">Checklist</Link>
        </li>
        <li>
            <Link to="/">Log In</Link>
        </li>
        <li>
            <Link to="/">Sign Up</Link>
        </li>
    </>
)} */}