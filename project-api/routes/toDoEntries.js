const express = require("express")
//creating a new router
const router = express.Router()

//structure: http method, handler, route method
//creating an entry
router.post("/", async (req, res, next) => {
    try {
       //create a new item in the to do list
    } catch(err) {
        next(err)
    }
})

//listing all entries
router.get("/:toDoEntryId", async (req, res, next) => {
    try {
       //fetching a single list item
    } catch(err) {
        next(err)
    }
})

//updating an entry
router.put("/:toDoEntryId", async (req, res, next) => {
    try {
       //updating a single list item
    } catch(err) {
        next(err)
    }
})


module.exports = router