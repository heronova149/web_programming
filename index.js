const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})

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
        "id": 2,
        "name":"clyde"
    },
    ];

app.get('/test', (req, res) => {
    res.json(goats);
})

console.log("... SERVER IS RUNNING ...");

app.listen(3000);
