// create routes for the home page
const router = require('express').Router();
const { Post, User, Comments } = require('../models');
const sequelize = require('../configuration/connection');

// get all posts for homepage
router.get('/', (req, res) => {
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
