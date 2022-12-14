const UserController = require('./controller');
const response = require('../../network/response');
const express = require('express');

const controller = new UserController();
const router = express.Router();

router.get('/', (req, res) => {
    controller
        .getUsers()
        .then((users) => {
            response.success(req, res, users, 200);
        })
        .catch((error) => {
            response.error(req, res, error.message, 500);
        });
});

router.post('/', (req, res) => {
    controller
        .addUser(req.body.name)
        .then((user) => {
            response.success(req, res, user, 201);
        })
        .catch((error) => {
            response.error(req, res, error.message, 500);
        });
});

module.exports = router;
