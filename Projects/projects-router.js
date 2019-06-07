const router = require('express').Router();

const db = require('./projects-model');

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

module.exports = router;