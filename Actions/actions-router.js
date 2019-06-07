const express = require('express');
const router = require('express').Router();

const db = require('./actions-model');

router.use(express.json());

router.post('/', async (req, res) => {
    const action = await db.add(req.body);
    const { description, notes, project_id } = req.body;

    try {
        if (!description || !notes || !project_id) {
            res.status(404).json({ message: 'Please add a description, notes, and/or project ID and try again' });
        } else {
        res.status(201).json(action);
        }
    } catch(error) {
        res.status(500).json({ message: "server error, could not add action"});
    }
});

router.get('/', async (req, res) => {
    const actions = await db.find();
    try {
        if (actions) {
            res.status(200).json(actions);
        } else {
            res.status(404).json({ message: "Sorry, no actions exist"});
        }
    } catch(error) {
        res.status(500).json({ message: "server error while retrieving actions" });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = await req.params;
    const action = await db.findById(id)
    try {
        if (!action) {
            res.status(404).json({ message: "The action with this ID could not be found" })
        } else {
            res.status(200).json(action);
        }
    } catch(error) {
        res.status(500).json({ message: "no no, not today...server error baby"})
    }
});

module.exports = router;