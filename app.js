const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv/config");

const app = express();

//middleware
// app.use(cors());
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