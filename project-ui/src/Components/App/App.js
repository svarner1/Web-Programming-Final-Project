import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import apiClient from "../../services/apiClient"
import axios from "axios"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import Login from "../Login/Login"
import Signup from "../Signup/Signup"
import './App.css';

export default function App() {
  const [user, setUser] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    //The user is being fetched using the api token and the apiClient file
    const fetchUser = async () => {
      //fetchUserFromToken() returns the user (by using auth/me)
      const { data, error } = await apiClient.fetchUserFromToken()
      if (data) {
        console.log(data.user)
        setUser(data.user)
      }
      if (error){
        setError(error)
      }
    }

    const token = localStorage.getItem("event_finder_token")
      if (token) {
        apiClient.setToken(token)
        fetchUser()
      }
  }, [])

  const handleLogout = async () => {
    await apiClient.logoutUser()
    setUser({})
    setError(null)
  }

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar user={user} setUser={setUser} handleLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login user={user} setUser={setUser}/>} />
            <Route path="/signup" element={<Signup user={user} setUser={setUser}/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}
