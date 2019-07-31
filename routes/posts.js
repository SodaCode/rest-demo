const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const cors = require("cors");





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
router.get("/:postId", async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

//update post
router.patch("/:postId", async (req, res) => {
    try {
        const updatedPost = await Post.updateOne({
            _id: req.params.postId
        }, {
            $set: {
                title: req.body.title
            }
        });
        res.json(updatedPost);
    } catch (err) {
        res.json({
            message: err
        });
    }
})

//delete post
router.delete("/:postId", async (req, res) => {
    try {
        const removePost = await Post.remove({
            _id: req.params.postId
        });
        res.json(removePost);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;