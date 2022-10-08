// create routes for the home page
const router = require('express').Router();
const { Post, User, Comments } = require('../models');


// get all posts for homepage
router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['id','content','title','created_at'],
        order: [['created_at','DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comments,
                attributes: ['id','comment_text','post_id','user_id','created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('homepage', { posts, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });           
});

// get one post
router.get('/post/:id', (req, res) => {
});

// login route
router.get('/login', (req, res) => {
});

// signup route
router.get('/signup', (req, res) => {
});


// export router
module.exports = router;
