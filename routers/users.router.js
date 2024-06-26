const express = require('express')
const router = express.Router()

//TODO remove
const users = [
    { id: 1, firstName: "Forrest", lastName: "Gump" },
    { id: 2, firstName: "Hari", lastName: "Seldon" },
    { id: 3, firstName: "Tom", lastName: "Cruise" },
];

router.post('/', (req, res) => {
    console.log(req.body);
    res.status(201);
    res.send("Successfully created!")
})

router.get('/', (req, res) => {
    const reqUserId = req.query.id;
    let found = false;
    for(const user of users) {
        if(user.id == reqUserId) {
            res.send(user);
            return;
        }
    }
    if(!found){
        res.status(404).send();
    }
})



module.exports = router;