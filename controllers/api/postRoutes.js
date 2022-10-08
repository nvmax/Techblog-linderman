// create routes for api
const router = require('express').Router();
const { Post, User, Comments } = require('../../models');
const sequelize = require('../../configuration/connection');

// get all posts
router.get('/', (req, res) => {
});

// get one post
router.get('/:id', (req, res) => {
});

// create a post
router.post('/', (req, res) => {
});

// update a post'
router.put('/:id', (req, res) => {
});

// delete a post
router.delete('/:id', (req, res) => {
});

// export router
module.exports = router;
