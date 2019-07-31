const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

const app = express();

app.use(bodyParser.json());

//Imported Routes
const postRoute = require("./routes/posts");

app.use("/posts", postRoute);

//Routes
app.get("/", (req, res) => {
    res.send("We are at the home page");
});

//DB
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true
}, () => {
    console.log("DB connected");
});

app.listen(3000);