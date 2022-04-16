const jwt = require("jsonwebtoken")
const { SECRET_KEY } = require("../config")
const { UnauthorizedError } = require("../utils/errors")

//a function that extracts the jwt from the request header
const  jwtFrom = ({ headers }) => {
    if(headers?.authorization) {
        //The authorization header should have this structure:
        //Authorization: "Bearer asdfghjkl"
        const [scheme, token] = headers.authorization.split(" ")
        if(scheme.trim() === "Bearer"){
            return token
        }
    }

    return undefined
}
//a function that attaches the usr to the res object
const extractUserFromJwt = (req, res, next) => {
    try {
        const token = jwtFrom(req)
        if(token){
            res.locals.user = jwt.verify(token, SECRET_KEY)
        }

        return next()
    } catch(err) {
        console.log(err)
        return next()
    }
}

//a function to verify a auther user exists
const requireAuthenticatedUser = (req, res, next) => {
    try {
        const { user } = res.locals
        if(!user?.email) throw new UnauthorizedError()
        return next()
    } catch(error) {
        return next(error)
    }
}

module.exports = {
    extractUserFromJwt,
    requireAuthenticatedUser
}