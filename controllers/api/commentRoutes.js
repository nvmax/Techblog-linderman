// create comment routes for api
const router = require('express').Router();
const { Comments } = require('../../models');

// get all comments
router.get('/', (req, res) => {
    Comments.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create a comment
router.post('/', (req, res) => {
    if (req.session) {
        Comments.create({
            comment_text: req.body.comment_text,
            post_id: req.body.post_id,
            user_id: req.session.user_id
        })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
});

// export router
module.exports = router;

