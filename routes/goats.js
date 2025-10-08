const express = require("express");
const router = express.Router();

const goats = [
    {
        "id": 1,
        "name":"t-rex"
    },
    {
        "id": 2,
        "name":"connie"
    },
    {
        "id": 3,
        "name":"clyde"
    },
];

router.get('/t', (req, res) => {
    res.json(goats);
})

router.get('/:id', (req, res) => {
    console.log(req.params.id);
    let selectedGoat = null;
    goats.forEach((goat) => {
        if(goat.id == req.params.id) {
            selectedGoat = goat;
        }
    });
    res.json(selectedGoat);
});

router.delete('/:id', (req, res) => {
    console.log("Delete the goat with id: " + req.params.id)
    
})
