const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send("[GET] all the artists");
})

router.post('/', (req, res) => {
    res.send("[POST] add new artist");
});

router.delete('/:id', (req, res) => {
    res.send("[DELETE] remove an artist");
});

router.put('/:id', (req, res) => {
    res.send("[PUT] update an artist");
});

module.exports = router;