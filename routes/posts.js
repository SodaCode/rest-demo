const express = require("express");
const router = express.Router();
const Post = require("../models/Post");





//gets all the post 
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

//submits a post
router.post("/", async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savePost = await post.save();
        res.json(savePost);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

//get back a specific post
router.get("/:postId", (req, res) => {
    console.log(req.perams.postId);
})

module.exports = router;