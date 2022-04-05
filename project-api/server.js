const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const { BadRequestError, NotFoundError } = require("./utils/errors")
// const { application } = require("express")

const app = express()

//enables cross-origin resource sharing
app.use(cors())
//parse incoming rquest bodies with JSON payloads
app.use(express.json())
//log request info
app.use(morgan("tiny"))

app.use((req, res, next) => {
    return next(new NotFoundError())
})

app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message

    return res.status(status).json({
        error: {message, status}
    })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`🚀 Server running http://localhost:${PORT}`);
})