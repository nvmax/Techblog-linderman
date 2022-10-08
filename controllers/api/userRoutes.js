// create routes for api
const router = require('express').Router();
const { Post, User, Comments } = require('../../models');
const sequelize = require('../../configuration/connection');

// get all users
router.get('/', (req, res) => {
});

// get one user
router.get('/:id', (req, res) => {
});

// create a user
router.post('/', (req, res) => {
});

// login a user
router.post('/login', (req, res) => {
});

// logout a user
router.post('/logout', (req, res) => {
});

// exports router
module.exports = router;