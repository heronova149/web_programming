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

router.get('/', (req, res) => {
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
    const id = Number(req.params.id);
    goats = goats.filter(goat => goat.id !== id);
    res.json({ message: `Deleted goat with id ${id}` });
});

module.exports = router;