import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import apiClient from "../../services/apiClient"
import axios from "axios"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import Login from "../Login/Login"
import Signup from "../Signup/Signup"
import ToDoListPage from "../ToDoListPage/ToDoListPage"
import NewListItemForm from "../NewListItemForm/NewListItemForm"
import './App.css';

export default function App() {
  const [user, setUser] = useState({})
  const [error, setError] = useState(null)
  const [isFetching, setIsFetching] = useState(false)
  const [toDoEntries, setToDoEntries] = useState([])
  const [moodEntries, moodoEntries] = useState([])

  //fetching the current user
  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await apiClient.fetchUserFromToken()
      if (data) {
        setUser(data.user)
      }
    }

    const token = localStorage.getItem("rate_my_setup_token")
    if (token) {
      apiClient.setToken(token)
      fetchUser()
    }
  }, [])

  console.log("USER", user)

  useEffect(() => {
    const fetchToDoListItems = async () => {
      console.log("INSIDE FETCH USERS ITEMS")
      console.log("USER", user)
      setIsFetching(true)
      const { data, error } = await apiClient.listUserToDoEntries(user.id)
      if (data) {
        console.log("data", data)
        setToDoEntries(data.toDoEntries)
      }
      if (error) {
        setError(error)
      }

      setIsFetching(false)
    }

    fetchToDoListItems()
  }, [user])

  //logging out the user
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
            <Route path="/toDoList" element={<ToDoListPage user={user} setUser={setUser} toDoEntries={toDoEntries}/>}/>
            <Route path="/createListItem" element={<NewListItemForm user={user} setUser={setUser} setToDoEntries={setToDoEntries}/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}
