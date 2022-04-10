const bcrypt = require("bcrypt")
const db = require("../db")
const { BCRYPT_WORK_FACTOR } = require("../config")
const { UnauthorizedError, BadRequestError } = require("../utils/errors")

class User {
    static async makePublicUser(user) {
        return {
            id: user.id,
            email: user.email,
            username: user.username,
            createdAt: user.created_at,
        }
    }
    
    static async login(credentials) {
        //user should submit their email and password
        //if any of these fields are missing, throw an error
        const requiredFields = ["email", "password"]
        requiredFields.forEach((field) => {
            if(!credentials.hasOwnProperty(field)){
                throw new BadRequestError(`Missing ${field} in request body.`)
            }
        })
        //
        //lookup the user in the db by emails
        const user = await User.fetchUserByEmail(credentials.email)
        //if a user is found, compare the submitted password
        //with the password in the db
        //if there is a match, return the user
        if(user){
            const isValid = await bcrypt.compare(credentials.password, user.password)
            if(isValid){
                return User.makePublicUser(user)
            }
        }
        //if any of this is wrong, throw an error
        throw new UnauthorizedError("Invalid email/password combo")
    }

    static async register(credentials) {
        //user should submit their email, pw
        //if any fields are missing, throw an error
        const requiredFields = ["email", "username", "password"]
        requiredFields.forEach((field) => {
            if(!credentials.hasOwnProperty(field)){
                throw new BadRequestError(`Missing ${field} in request body.`)
            }
        })

        if(credentials.email.indexOf("@") <= 0 ){
            throw new BadRequestError("Invalid email.")
        }
        //
        //make sure no user already exists in the system with that email
        //if one does, throw an error
        const existingUser = await User.fetchUserByEmail(credentials.email)
        if(existingUser) {
            throw new BadRequestError(`Duplicate email: ${credentials.email}`)
        }

        const existingUserWithUsername = await User.fetchUserByUsername(credentials.username)
        if(existingUserWithUsername) {
            throw new BadRequestError(`A user already exists with username: ${credentials.username}`)
        }
        //
        //take the users password, and hash it
        const hashedPassword = await bcrypt.hash(credentials.password, BCRYPT_WORK_FACTOR)
        //take the users email, and lowercase it
        const lowercasedEmail = credentials.email.toLowerCase()
        //
        //create a new user in the db with all their info
        const result = await db.query(
            `INSERT INTO users (email, username, password)
            VALUES ($1, $2, $3)
            RETURNING id, email, username, created_at;
            `,
            [lowercasedEmail, credentials.username, hashedPassword])

        //return the user
        const user = result.rows[0]

        return User.makePublicUser(user)
    }

    static async fetchUserByEmail(email) {
        if(!email) {
            throw new BadRequestError("No email provided")
        }

        const query = `SELECT * FROM users WHERE email = $1`

        const result = await db.query(query, [email.toLowerCase()])

        const user = result.rows[0]

        return user
    }

    static async fetchUserByUsername(username) {
        if(!username) {
            throw new BadRequestError("No username provided")
        }

        const query = `SELECT * FROM users WHERE username = $1`

        const result = await db.query(query, [username])

        const user = result.rows[0]

        return user
    }
}

module.exports = User