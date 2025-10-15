const express = require("express");
const router = express.Router();

router.post('/', (req, res) => {
    res.send("[POST] a vote");
})

module.exports = router;