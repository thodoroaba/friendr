const express = require('express')
const usersController = require('../controllers/users.controller');

const router = express.Router()

router.post('/', (req, res) => {
    usersController.createUser(req.body);
    res.status(201);
    res.send("Successfully created!")
})


router.get('/', (req, res) => {
    const reqUserId = req.query.id;
    res.status(404).send();
})

router.delete('/:id', (req, res) => {
    const reqUserId = req.params.id;
    usersController.delete(reqUserId);
    res.status(200).send();
})

module.exports = router;