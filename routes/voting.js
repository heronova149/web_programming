const express = require("express");
const router = express.Router();

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

router.post('/', async(req, res) => {
  // Check if artist with a name is already in the database
  // similar as SELECT * FROM Artists WHERE name LIKE 'dj ghost'
  const checkArtist = await prisma.artists.findMany({
    where: {
      name: req.body.name
    }
  });

module.exports = router;