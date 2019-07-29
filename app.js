const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();


//Routes
app.get("/", (req, res) => {
    res.send("We are at the home page");
});

app.get("/show", (req, res) => {
    res.send("We are at the show page");
});

//DB
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true
}, () => {
    console.log("DB connected");
});

app.listen(3000);