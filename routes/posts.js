const express = require("express");

const router = express.Router();

router.get('/', (req, res) => {
    res.send("We are on posts");
});

router.post("/", (req, res) => {
    console.log("post made");
});

module.exports = router;