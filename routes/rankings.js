const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send("[GET] show all the rankings");
})

module.exports = router;