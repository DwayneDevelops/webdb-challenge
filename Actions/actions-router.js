const router = require('express').Router();

const db = require('./actions-model');

// router.post('/', (req, res) => {
//     db.add(req.body)
//     .then(action => {
//         res.status(200).json(action);
//     })
//     .catch(err => {
//         res.status(500).json({ message: "server error, could not add action"});
//     });
// });

router.post('/', async (req, res) => {
    const project = await db.add(req.body)
    try {
        res.status(201).json(project);
    } catch(error) {
        res.status(500).json({ message: "server error, could not add project"});
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
    const project = await db.findById(id)
    try {
        if (!project) {
            res.status(404).json({ message: "The project with this ID could not be found" })
        } else {
            res.status(200).json(project);
        }
    } catch(error) {
        res.status(500).json({ message: "no no, not today...server error baby"})
    }
});

module.exports = router;