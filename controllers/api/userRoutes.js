// create routes for api
const router = require('express').Router();
const { Post, User, Comments } = require('../../models');
const sequelize = require('../../configuration/connection');

// get all users
router.get('/', (req, res) => {
    // get all users
    User.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
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