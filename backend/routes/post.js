const express = require("express");

const { addPost, getPosts, getPost } = require("../controllers/post");

const postRouter = express.Router();

postRouter.route("/post").post(addPost);
postRouter.route("/post").get(getPosts);
postRouter.route("/post/:id").get(getPost);

module.exports = postRouter;
