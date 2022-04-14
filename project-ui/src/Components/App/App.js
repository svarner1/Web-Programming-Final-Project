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
          </Routes>
        </BrowserRouter>
    </div>
  );
}
