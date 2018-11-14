const express = require('express');
const router = express.Router();
const debug = require('debug')('api:requests');
const db = require('../store');
const RequestResponse = require('../models/RequestResponse');

router.get('/', (req, res) => {
    db.requests.find({}, function(err, docs) {
        let response = new RequestResponse(docs);
        res.status(200).json(response.getCollection());
    })
})

router.post('/', (req, res) => {

})

module.exports = router