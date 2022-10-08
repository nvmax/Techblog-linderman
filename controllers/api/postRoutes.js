// create routes for api
const router = require('express').Router();
const { Post, User, Comments } = require('../../models');


// get all posts
router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['id','coneent','title','created_at'],
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
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });           
});

// get one post
router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id','coneent','title','created_at'],
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
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });   
});

// create a post
router.post('/', (req, res) => {
   // post route for creating a post
    Post.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    }
    );
});

// update a post'
router.put('/:id', (req, res) => {
    // update a post's title
    Post.update(
        {
            title: req.body.title
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found!' });
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete a post
router.delete('/:id', (req, res) => {
    // deletes a post by its `id` value
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found!' });
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// export router
module.exports = router;
