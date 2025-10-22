const express = require('express');
const router = express.Router();

// we will use the prisma client to connect with the database
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// ------------
// Get songs
// ------------
router.get('/', async (req, res) => {
  const songs = await prisma.songs.findMany({
    include: {
      artists: true
    }
  });
  res.json(songs);
})

// ------------
// Add sonog
// ------------
router.post('/', async (req, res) => {
  let artistId = req.body.artist_id;
  let songName = req.body.name;

  const newSong = await prisma.songs.create({
        data: {
          name: songName,
          artist_id: artistId
        }
      });

  res.json(newSong);
})

// ------------
// Delete song
// ------------
router.delete('/:id', (req, res) => {
  // @todo: link to database
  res.send("[DELETE] delete an song");
})

module.exports = router;