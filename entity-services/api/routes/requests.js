const express = require('express');
const router = express.Router();
const debug = require('debug')('api:requests');
const db = require('../store');
const RequestResponse = require('../models/RequestResponse');

router.get('/', (req, res) => {
    const types = ['shipping', 'storage', 'supply'];
    const type = types.includes(req.query.template) ? req.query.template : 'shipping';
    db.requests.find({}, function(err, docs) {
        let response = new RequestResponse(docs, type);
        res.status(200).json(response.getCollection());
    })
})

router.post('/', (req, res) => {
    const template = req.body.template;
    const doc = RequestResponse.toObject(template);
    db.requests.insert(doc, function(err, newDoc) {
        res.location(req.baseUrl+'/'+newDoc._id).status(201).end();
    })
})

router.get('/:id', (req, res) => {
    db.requests.find({ _id: req.params.id }, function(err, docs) {
        if (docs.length === 0) {
            res.status(404).end();
        } else {
            let response = new RequestResponse(docs);
            res.status(200).json(response.getCollection());
        }
    })
})

router.put('/:id', (req, res) => {
    const template = req.body.template;
    const doc = RequestResponse.toObject(template);
    db.requests.update({ _id: req.params.id }, { $set: doc }, {}, function(err, numReplaced) {
        if (numReplaced === 0) {
            res.status(404).end();
        } else { 
            res.status(200).end();
        }
    })
})

router.delete('/:id', (req, res) => {
    db.requests.remove({ _id: req.params.id }, {}, function(err, numRemoved) {
        if (numRemoved === 0) {
            res.status(404).end();
        } else {
            res.status(204).end();
        }
    })
})

module.exports = router