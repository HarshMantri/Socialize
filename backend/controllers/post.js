const Post = require("../models/Post");

exports.addPost = async (req, res, next) => {
    const { title, content, authorID, authorFirstName, authorLastName } =
        req.body;

    try {
        const post = await Post.create({
            title,
            content,
            authorID,
            authorFirstName,
            authorLastName,
        });

        res.status(200).json({
            success: true,
            post: post,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error,
        });
    }
};

exports.getPosts = async (req, res, next) => {
    try {
        const posts = await Post.find({}).sort("-createdAt");

        return res.status(200).json({
            success: true,
            posts,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error,
        });
    }
};

exports.getPost = async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id);

        return res.status(200).json({
            success: true,
            post,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error,
        });
    }
};
