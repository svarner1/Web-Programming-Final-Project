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
                        <Link to="/">About Us</Link>
                    </li>
                    <li>
                        <Link to="/">Site Description</Link>
                    </li>
                    <li>
                        <Link to="/">Checklist</Link>
                    </li>
                    {user?.email ? (
                        <>
                            <li>
                                <Link to="/toDoList">To-Do List</Link>
                            </li>
                            <li>
                                <Link to="/">Mood Tracker</Link>
                            </li>
                            <li>
                                <Link to="/">Site Details</Link>
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



