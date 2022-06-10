const Comment = require("./comment.js");
const Post = require("./post.js");
const User = require("./user.js");

Post.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "cascade"
});

Comment.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "cascade"
});

Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "cascade"
});


module.exports = {User, Post, Comment };
