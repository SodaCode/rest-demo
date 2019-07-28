const express = require("express");

const app = express();

//Routes
app.get("/", (req, res) => {
    res.send("We are at the home page");
});

app.get("/show", (req, res) => {
    res.send("We are at the show page");
});

app.listen(3000);