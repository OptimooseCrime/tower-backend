const express = require('express')
const router = express.Router()
const queries = require('../queries')

router.get('/',(request, response, next) => {
    queries.list()
    .then(campers => {
        response.json({campers})
    })
    .catch(next)
})

router.get('/:id', (request, response, next) => {
    queries.read(request.params.id)
    .then(camper => {
        camper
            ? response.json({camper})
            : response.status(404).json({message:
            'Not Found'})
    })
    .catch(next)
})

router.post('/', (request,response, next) => {
    queries.create(request.body)
    .then(camper => {
        response.status(201).json({camper})
    })
    .catch(next)
})

router.delete('/:id', (request, response, next) => {
    queries.delete(request.params.id)
    .then(() => {
        response.status(204).json({deleted: true})
    })
    .catch(next)
})

router.put('/:id', (request,response, next) => {
    queries.update(request.params.id, request.body)
    .then(camper => {
        response.json({camper})
    })
    .catch(next)
})

module.exports = router