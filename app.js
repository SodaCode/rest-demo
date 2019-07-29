const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();


//Imported Routes
const showRoutes = require("./routes/show");

app.use("/show", showRoutes);

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