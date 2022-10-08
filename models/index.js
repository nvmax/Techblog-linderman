const User = require('./user');
const Post = require('./post');
const Comments = require('./comments');

// users has many posts
// users has many comments

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comments, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});


// posts belongs to users
// posts has many comments

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

Post.hasMany(Comments, {
    foreignKey: 'post_id',
});

// comments belongs to users
// comments belongs to posts

Comments.belongsTo(User, {
    foreignKey: 'user_id',
});

Comments.belongsTo(Post, {
    foreignKey: 'post_id',
});




module.exports = { User, Post, Comments };

