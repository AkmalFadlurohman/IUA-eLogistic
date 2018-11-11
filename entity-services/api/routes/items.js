const express = require('express');
const router = express.Router();
const debug = require('debug')('api:items');
const db = require('../store');
const ItemResponse = require('../models/ItemResponse');

router.get('/', (req, res) => {
    db.items.find({}, function(err, docs) {
        let response = new ItemResponse(docs)
        res.status(200).json(response.collection);
    })
})

router.post('/', (req, res) => {
    const template = req.body.template;
    const doc = ItemResponse.toObject(template);
    db.items.insert(doc, function(err, newDoc) {
        res.location(req.baseUrl+'/'+newDoc._id).status(201).end();
    })
})

router.get('/:id', (req, res) => {
    db.items.find({ _id: req.params.id }, function(err, docs) {
        res.status(200).json(docs);
    })
})

module.exports = router