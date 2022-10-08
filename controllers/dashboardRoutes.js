// create routes for dashboard
const router = require('express').Router();
const { Post, User, Comments } = require('../models');
const sequelize = require('../configuration/connection');

// get all posts for dashboard
router.get('/', (req, res) => {
});

// edit post
router.get('/edit/:id', (req, res) => {
});

// create new post
router.get('/new', (req, res) => {
});

// export router
module.exports = router;
