const express = require('express')
const Tasks = require('../models/Tasks')

const router = express.Router()

router.get('/', (req, res) => {
  Tasks.find()
    .exec()
    .then(x => res.status(200).send(x))
    .catch(e => res.send(e))
})

router.get('/:id', (req, res) => {
  Tasks.findById(req.params.id)
    .exec()
    .then(x => res.status(200).send(x))
    .catch(e => res.send(e))
})

router.post('/', (req, res) => {
  Tasks.create(req.body)
    .then(x => res.status(201).send(x))
    .catch(e => res.send(e))
})

router.post('/find', (req, res) => {
  Tasks.find(req.body)
    .exec()
    .then(x => res.status(200).send(x))
    .catch(e => res.send(e))
})

router.put('/:id', (req, res) => {
  Tasks.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(204))
    .catch(e => res.send(e))
})

router.delete('/:id', (req, res) => {
  Tasks.findByIdAndDelete(req.params.id)
    .exec()
    .then(() => res.sendStatus(204))
    .catch(e => res.send(e))
})

module.exports = router