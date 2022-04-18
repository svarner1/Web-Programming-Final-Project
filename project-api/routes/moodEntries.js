const express = require("express")
const MoodEntry = require("../models/moodEntry")
const security = require("../middleware/security")
//creating a new router
const router = express.Router()

//structure: http method, handler, route method
//creating an entry
router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
       const { user } = res.locals
       const moodEntry = await MoodEntry.createMoodEntry({moodEntry: req.body, user})
       return res.status(201).json({ moodEntry })
    } catch(err) {
        next(err)
    }
})

//listing all entries
router.get("/userMoodList/:userId", async (req, res, next) => {
    const { userId } = req.params
    try {
       //fetching a single entry item
       const moodEntries = await MoodEntry.listMoodEntriesForUser({userId})
       return res.status(200).json({ moodEntries })
    } catch(err) {
        next(err)
    }
})

//listing a single entry
router.get("/:moodEntryId", async (req, res, next) => {
    try {
        //fetching a single entry
        const { moodEntryId } = req.params
        const moodEntry = await MoodEntry.fetchMoodEntryById(moodEntryId)
        return res.status(200).json({ moodEntry })
    } catch(err) {
        next(err)
    }
})

//updating an entry
router.put("/:moodEntryId", async (req, res, next) => {
    try {
       //updating a single list item
    } catch(err) {
        next(err)
    }
})


module.exports = router