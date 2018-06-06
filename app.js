const express = require("express")
const bodyParser = require('body-parser')
const morgan = require('morgan')
const server = express()
const campers = require('./routes/campers')

server.use(morgan('dev'))
server.use(bodyParser.json())

server.use('/campers', campers)

//catch 404 and fwd to error handler
server.use((req, res, next) => {
    const err = new Error('Sorry, not found')
    err.status = 404
    next(err)
})

// error handler
server.use((err, rew, res, next) => {
    res
    .status(err.status || 500)
    .json({
        message:err.message,
        error: req.server.get('env')=== 'development' ? err.stack : {}
    })
})

module.export = server