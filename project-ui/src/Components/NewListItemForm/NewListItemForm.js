import { useState } from "react"
import { useNavigate } from "react-router-dom";
import apiClient from "../../services/apiClient"
import "./NewListItemForm.css"

export default function NewListItemForm({ user, setToDoEntries }) {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false)
    const [error, setError] = useState(null)
    const [toDoEntry, setToDoEntry] = useState({
        text: "",
        priority: "",
        category: "",
    })

    const handleOnInputChange = (event) => {
        setToDoEntry((n) => ({ ...n, [event.target.name]: event.target.value }))
    }

    const handleOnSubmit = async () => {
        setIsProcessing(true)
        setError((e) => ({ ...e, toDoEntry: null }))

        console.log("TO DO ENTRY", toDoEntry)
        console.log("USER", user)

        // const { data, error } = await apiClient.createToDoEntry({ text: toDoEntry.text, priority: toDoEntry.priority, category: toDoEntry.category })
        const { data, error } = await apiClient.createToDoEntry({ toDoEntry })
        console.log("DATA", data)
        const currentToDoEntries = await apiClient.listUserToDoEntries(user.id)
        if (data) {
            setToDoEntries(currentToDoEntries.data.toDoEntries)
            navigate("/toDoList")
        }
        if (error) {
            setError((e) => ({ ...e, toDoEntry: error }))
        }

        setIsProcessing(false)    
    }

   return (
        <div className="createExercise">
            <div className="card">
                <h2>Add a List Item</h2>

                <br />

                <div className="form">
                    <div className="input-field">
                        <label htmlFor="priority">Text</label>
                        <input
                            type="text"
                            name="text"
                            placeholder="Text"
                            value={toDoEntry.text}
                            onChange={handleOnInputChange}
                        />
                    </div>

                    <div className="input-field">
                    <label htmlFor="priority">Priority (Scale: 1 - 5)</label>
                    <input
                        type="text"
                        name="priority"
                        placeholder="Priority"
                        value={toDoEntry.priority}
                        onChange={handleOnInputChange}
                    />
                    </div>

                    <div className="input-field">
                    <label htmlFor="duration"> Category</label>
                    <input
                        list="categories"
                        name="category"
                        placeholder="category"
                        value={toDoEntry.category}
                        onChange={handleOnInputChange}
                    />
                    <datalist id="categories">
                        <option value="Home"/>
                        <option value="School"/>
                        <option value="Health"/>
                        <option value="Work"/>
                        <option value="Leisure"/>
                        <option value="Other"/>
                    </datalist>
                    </div>


                    <button className="btn" disabled={isProcessing} onClick={handleOnSubmit}>
                    {isProcessing ? "Loading..." : "Add To-Do List Item"}
                    </button>
                </div>
            </div>
        </div>
   )
    
}