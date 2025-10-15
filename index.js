const express = require("express");
const app = express();

// All the routes
const songsRouter = require('./routes/songs');
const artistsRouter = require('./routes/artists');
const goatsRouter = require('./routes/goats');
const rankingsRouter = require('./routes/rankings');
const votingRouter = require('./routes/voting');

// Use routes
app.use('/songs', songsRouter);
app.use('/artists', artistsRouter);
app.use('/goats', goatsRouter);
app.use('/ranking', rankingsRouter);
app.use('/voting', votingRouter);

console.log("... SERVER IS RUNNING ...");
app.listen(3000);
