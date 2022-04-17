import { useState } from "react"
import { useNavigate } from "react-router-dom";
import apiClient from "../../services/apiClient"
import "./NewListItemForm.css"

export default function NewListItemForm({ user, setToDoEntries }) {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false)
    const [error, setError] = useState(null)
    const [toDoEntries, setToDoEntries] = useState({
        text: "",
        priority: "",
        category: "",
    })

    const handleOnInputChange = (event) => {
        setToDoEntries((n) => ({ ...n, [event.target.name]: event.target.value }))
    }

    const handleOnSubmit = async () => {
        setIsProcessing(true)
        setError((e) => ({ ...e, exerciseEntry: null }))

        const { data, error } = await apiClient.createExerciseEntry({ exerciseEntry })
        const currentExerciseEntries = await apiClient.getExerciseEntries()
        if (data) {
        setToDoEntries(currentExerciseEntries.data.listedExerciseData)
        navigate("/exercise")
        }
        if (error) {
        setError((e) => ({ ...e, exerciseEntry: error }))
        }

        setIsProcessing(false)    
    }
}