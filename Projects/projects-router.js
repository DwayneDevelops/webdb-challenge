const express = require('express');
const router = require('express').Router();

const db = require('./projects-model');

router.use(express.json());

router.post('/', async (req, res) => {
    const project = await db.add(req.body);

    try {
        res.status(201).json(project);
    } catch(error) {
        res.status(500).json({ message: "server error, could not add project"});
    }
});

router.get('/', async (req, res) => {
    const projects = await db.find();
    try {
        if (projects) {
            res.status(200).json(projects);
        } else {
            res.status(404).json({ message: "Sorry, no projects exist"});
        }
    } catch(error) {
        res.status(500).json({ message: "server error while retrieving projects" });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = await req.params;
    const project = await db.findById(id)
    try {
        if (!project) {
            res.status(404).json({ message: "The project with this ID could not be found" })
        } else {
            const actions = await db.find('actions')
            res.status(200).json({project, actions});
        }
    } catch(error) {
        res.status(500).json({ message: "no no, not today...server error baby"})
    }
});


module.exports = router;