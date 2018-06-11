const express = require("express")
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
const campers = require('./routes/campers')
const cors = require("cors")

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())
app.use('/campers', campers)

//catch 404 and fwd to error handler
app.use((req, res, next) => {
    const err = new Error('Sorry, not found')
    err.status = 404
    next(err)
})

// error handler
app.use((err, req, res, next) => {
    res
    .status(err.status || 500)
    .json({
        message:err.message,
        error: req.app.get('env')=== 'development' ? err.stack : {}
    })
})

module.exports = app