const express = require("express");
const router = express.Router();

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

router.get('/', async(req, res) => {
    const ranking = await prisma.$queryRaw
    `SELECT
        song_id, S.name as songname, a.name asartistname, SUM(Points)
    FROM
        Votes as V
            INNER JOIN songs AS S USING(song_id)
            INNER JOIN artists as A USING(artist_id) 
    GROUP BY
        s.song_id
    ORDER BY
        SUM(Points) DESC;`
    
    res.send(ranking);
})

module.exports = router;