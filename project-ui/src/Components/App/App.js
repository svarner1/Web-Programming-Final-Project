import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import axios from "axios"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import Login from "../Login/Login"
import Signup from "../Signup/Signup"
import './App.css';

export default function App() {
  const [user, setUser] = useState({})

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            {/* <Route path="/login" element={<Login user={user} setUser={setUser}/>} />
            <Route path="/signup" element={<Signup user={user} setUser={setUser}/>} /> */}
          </Routes>
        </BrowserRouter>
    </div>
  );
}
