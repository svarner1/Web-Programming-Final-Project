import { useState } from "react"
import { useNavigate } from "react-router-dom";
import apiClient from "../../services/apiClient"
import "./NewMoodEntryForm.css"

export default function NewListItemForm({ user, setMoodEntries }) {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false)
    const [error, setError] = useState(null)
    const [moodEntry, setMoodEntry] = useState({
        text: "",
        mood: "",
    })

    const handleOnInputChange = (event) => {
        setMoodEntry((n) => ({ ...n, [event.target.name]: event.target.value }))
    }

    const handleOnSubmit = async () => {
        setIsProcessing(true)
        setError((e) => ({ ...e, moodEntry: null }))

        console.log("MOOD ENTRY", moodEntry)
        console.log("USER", user)

        const { data, error } = await apiClient.createMoodEntry({ moodEntry })
        console.log("DATA", data)
        const currentMoodEntries = await apiClient.listUserMoodEntries(user.id)
        if (data) {
            setMoodEntries(currentMoodEntries.data.moodEntries)
            navigate("/moodEntries")
        }
        if (error) {
            setError((e) => ({ ...e, moodEntry: error }))
        }

        setIsProcessing(false)    
    }

   return (
        <div className="createExercise">
            <div className="card">
                <h2>Add a Mood Entry</h2>

                <br />

                <div className="form">
                    <div className="input-field">
                        <label htmlFor="text">How are you feeling?</label>
                        {/* <input
                            type="text"
                            name="text"
                            placeholder="Text"
                            value={moodEntry.text}
                            onChange={handleOnInputChange}
                        /> */}
                        <textarea 
                            name="text" 
                            value={moodEntry.text} 
                            onChange={handleOnInputChange}
                        />
                    </div>


                    <div className="input-field">
                    <label htmlFor="duration"> Mood</label>
                    <input
                        list="moods"
                        name="mood"
                        rows="4" 
                        cols="50"
                        placeholder="mood"
                        value={moodEntry.mood}
                        onChange={handleOnInputChange}
                    />
                    <datalist id="moods">
                        <option value="Stressed"/>
                        <option value="Nervous"/>
                        <option value="Unsettled"/>
                        <option value="Active"/>
                        <option value="Relaxed"/>
                        <option value="Lovable"/>
                        <option value="Romantic"/>
                        <option value="Happy"/>
                        <option value="Tired"/>
                        <option value="Calm"/>
                    </datalist>
                    </div>


                    <button className="btn" disabled={isProcessing} onClick={handleOnSubmit}>
                    {isProcessing ? "Loading..." : "Add Mood Entry"}
                    </button>
                </div>
            </div>
        </div>
   )
    
}