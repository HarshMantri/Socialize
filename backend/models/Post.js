const { model, Schema } = require("mongoose");

const postSchema = Schema({
    title: {
        type: String,
        required: [true, "Please add a title for the post"],
    },
    content: {
        type: String,
        required: [true, "Please add a content for the post"],
    },
    authorFirstName: {
        type: String,
    },
    authorLastName: {
        type: String,
    },
    authorID: {
        type: String,
        required: [true, "Unauthorized to make this post!"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = model("post", postSchema);
