const express = require('express');
const router = express.Router();
const debug = require('debug')('api:login');
const db = require('../store');
const LoginResponse = require('../models/LoginResponse')

const hash = (password) => require('crypto').createHash('md5').update(password).digest('hex') 

router.get('/', (req, res) => {
    const response = new LoginResponse();
    res.status(200).send(response);
});

router.post('/', (req, res) => {
    const template = req.body.template;
    const credential = LoginResponse.toObject(template);
    db.partners.findOne({ name: credential.name }, (err, doc) => {
        if (!doc) {
            res.status(404).end();
        } else {
            password = hash(credential.password);
            if (doc.password !== password) {
                res.status(401).end();
            } else {
                res.status(200).send('Logged in.')
            }
        }
    })
})

module.exports = router;