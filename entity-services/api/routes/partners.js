const express = require('express');
const router = express.Router();
const debug = require('debug')('api:partners');
const db = require('../store');
const PartnerResponse = require('../models/PartnerResponse');

router.get('/', (req, res) => {
    db.partners.find({}, function(err, docs) {
        let response = new PartnerResponse(docs);
        res.status(200).json(response.collection);
    })
})

router.get('/:id', (req, res) => {
    db.partners.find({ _id: req.params.id }, function(err, docs) {
        res.status(200).json(docs);
    })
})

module.exports = router