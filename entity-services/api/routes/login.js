const express = require('express');
const router = express.Router();
const debug = require('debug')('api:login');
const db = require('../store');
const LoginResponse = require('../models/LoginResponse')

router.get('/', (req, res) => {
    response = new LoginResponse();
    res.status(200).send(response);
});

module.exports = router;