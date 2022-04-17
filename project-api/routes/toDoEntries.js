const express = require("express")
const ToDoEntry = require("../models/toDoEntry")
const security = require("../middleware/security")
//creating a new router
const router = express.Router()

//structure: http method, handler, route method
// creating an entry
router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
       //create a new item in the to do list
       const { user } = res.locals
       console.log("User in create method ", user)
       const toDoEntry = await ToDoEntry.createToDoEntry({toDoEntry: req.body, user})
       return res.status(201).json({ toDoEntry })
    } catch(err) {
        next(err)
    }
})



//listing all entries
router.get("/userToDoList/:userId", async (req, res, next) => {
    const { userId } = req.params
    try {
        const toDoEntries = await ToDoEntry.listToDoEntriesForUser({userId})
        return res.status(200).json({ toDoEntries })
    } catch(err) {
        next(err)
    }
})

//listing a single entry
router.get("/:toDoEntryId", async (req, res, next) => {
    try {
        //fetching a single entry
        const { toDoEntryId } = req.params
        const toDoListEntry = await ToDoEntry.fetchToDoEntryById(toDoEntryId)
        return res.status(200).json({ toDoListEntry })
    } catch(err) {
        next(err)
    }
})

//deleting a list item
router.delete("/delete/:toDoEntryId", async (req, res, next) => {
    try {
       const { toDoEntryId } = req.params
       const deletedEntry = await ToDoEntry.deleteToDoListEntry(toDoEntryId)
       return res.status(200).json({ deletedEntry })
    } catch(err) {
        next(err)
    }
})


module.exports = router