import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar({ user, handleLogout}) {
    return (
        <nav className="Navbar">
            <div className="content">
                <div className="siteName">
                    <h1>My eJournal</h1>
                </div>
                <ul className="links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/aboutUs">About Us</Link>
                    </li>
                    <li>
                        <Link to="/siteDescription">Site Description</Link>
                    </li>
                    <li>
                        <Link to="/checklist">Checklist</Link>
                    </li>
                    {user?.email ? (
                        <>
                            <li>
                                <Link to="/toDoList">To-Do List</Link>
                            </li>
                            <li>
                                <Link to="/moodEntries">Mood Tracker</Link>
                            </li>
                            <li>
                                <span onClick={handleLogout}>Logout</span>
                            </li>
                        </>
                    ):(
                        <>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/signup">Sign Up</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    )
}



