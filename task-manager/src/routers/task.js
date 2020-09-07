const express = require('express')
const Task = require('../models/task')
const router = new express.Router()

router.post('/tasks', async (req, res) => {
    const task = new Task(req.body)

    try {
        await task.save()
        res.status(201).send(task)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).send(tasks)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findById(_id)
        if (!task) {
            return res.status(404).send()
        }
        res.status(200).send(task)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.put('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isInvalidOperation = updates.every((update) => {
        return allowedUpdates.includes(update)
    })

    if (!isInvalidOperation) {
        return res.status(400).send( {error: 'Invalid updated, ' + Object.keys(req.body) + ' not in database!!'} )
    }

    try {
        const task = await Task.findById(req.params.id)

        updates.forEach((update) => task[update] = req.body[update])
        await task.save()

        if (!task) {
            return res.status(404).send()
        }
    
        res.send(task) 
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)

        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router