const express = require("express")
const router = express.Router()

router.post("/login", async (req, res, next) => {
    try {
        //take users email and password and attempting to authenticate
    } catch(err) {
        next(err)
    }
})

router.post("/register", async (req, res, next) => {
    try {
        //creates a new user in our database
    } catch(err) {
        next(err)
    }
})

module.exports = router