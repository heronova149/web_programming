const express = require("express");
const router = express.Router();

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

router.post('/', async(req, res) => {
  const songId = req.body.songId;
  const points = req.body.points;

  const newVote = await prisma.songs.create({
    data: {
      song_id: songId,
      points: points
    }
  })
  res.json(newVote);
})

module.exports = router;