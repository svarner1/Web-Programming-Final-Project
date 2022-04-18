import { useState } from "react"
import { useNavigate } from "react-router-dom";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import "./Checklist.css"

export default function Checklist(){
    return (
        <div className="checklistPage">
            <div className="pageTitle">
                <h1>Checklist</h1>
            </div>
            <div className="pageContent">
                <div className="checklistItem">
                    <span><CheckBoxIcon/>Database Usage</span>
                    <p className="info">
                        To create my site I used the PERN stack (or PostgreSQL, Express, React and Node.js).
                        My SQL database holds information for each user, an authenticated user's to-do list entries,
                        an authenticated user's mood entries, and the categories that a user can choose from for their
                        moods and list items. All pages of the site carry an authenticated user's token once they are signed in
                        (by using res.locals and passing a user const as by using the React useState).

                        Both the "To-Do-List" and "Mood Tracker" pages retrieve a user's entries from the corresponding tables
                        in the SQL database. Also, both these pages retrieve category information from the corresponding SQL tables.
                    </p>
                </div>
                <div className="checklistItem">
                    <span><CheckBoxIcon/>Ajax Usage</span>
                    <p className="info">
                        For my site, I used axios which is a promise based HTTP request library/client. It makes use of Ajax technology 
                        because it uses XMLHttpRequests. In order to make asynchronous HTTP requests to my REST endpoints in my backend I use axios.
                        These requests are made on every page of my site besides the homepage in order to log in a user, register a user,
                        check if a user is authenticated/retrieve their info, create to-do-list and mood entries, delete an entry, and 
                        list a user's info (through GET, POST, and a DELETE request)
                    </p>
                </div>
                <div className="checklistItem">
                    <span><CheckBoxIcon/>Theme</span>
                    <p className="info">
                        My entire site has a simplistic theme. Every page besides the log in and sign in page has a white background. 
                        The navbar is a particular shade of blue, and I used this same shade for the background of the log in and sign up
                        page. It is also used as the background color for the button on the "Add a List Item" and "Add a Mood Entry" pages.
                    </p>
                </div>
                <div className="checklistItem">
                    <span><CheckBoxIcon/>New Library Usage</span>
                    <p className="info">
                        The library that I implemented in my website is Material UI. This library offers various UI components and tools.
                        For my "Mood Tracker Page" and "To-Do List Page" I used a Material UI button and Material UI Cards (for each list item).
                        I also used the checklist icon from the library for this page.
                    </p>
                </div>
                <div className="checklistItem">
                    <span><CheckBoxIcon/>Javascript Usage</span>
                    <p className="info"> 
                        Javascript is used for most of the pages of my site as React is written in JavaScript.
                        For example, I used javascript ternaries for two of my pages. For the navigation bar, a condition of whether
                        a user is currently logged in is checked. If, so the "To-Do List" and "Mood Tracker" pages are able to
                        be accessed. Otherwise, these sections on the navbar aren't seen.
                    </p>
                </div>
                <div className="checklistItem">
                    <span><CheckBoxIcon/>Membership Area</span>
                    <p className="info">
                        Only logged-in users are able to see the "To-Do List" page and "Mood Tracker" page.
                    </p>
                </div>
                <div className="checklistItem">
                    <span><CheckBoxIcon/>General User</span>
                </div>
            </div>
        </div>
    )
}