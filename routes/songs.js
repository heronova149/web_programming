const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send("[GET] all the songs");
})

router.post('/', (req, res) => {
    res.send("[POST] add new song");
});

router.delete('/:id', (req, res) => {
    res.send("[DELETE] remove a song");
});

module.exports = router;