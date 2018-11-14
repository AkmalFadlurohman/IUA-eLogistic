const express = require('express');
const router = express.Router();
const debug = require('debug')('api:partners');
const db = require('../store');
const PartnerResponse = require('../models/PartnerResponse');

router.get('/', (req, res) => {
    db.partners.find({}, function(err, docs) {
        let response = new PartnerResponse(docs);
        res.status(200).json(response.getCollection());
    })
})

router.post('/', (req, res) => {
    const template = req.body.template;
    const doc = PartnerResponse.toObject(template);
    db.partners.insert(doc, function(err, newDoc) {
        res.location(req.baseUrl+'/'+newDoc._id).status(201).end();
    })
})

router.get('/:id', (req, res) => {
    db.partners.find({ _id: req.params.id }, function(err, docs) {
        if (docs.length === 0) {
            res.status(404).end();
        } else {
            let response = new PartnerResponse(docs);
            res.status(200).json(response.getCollection());
        }
    })
})

router.put('/:id', (req, res) => {
    const template = req.body.template;
    const doc = PartnerResponse.toObject(template);
    db.partners.update({ _id: req.params.id }, { $set: doc }, {}, function(err, numReplaced) {
        if (numReplaced === 0) {
            res.status(404).end();
        } else { 
            res.status(200).end();
        }
    })
})

router.delete('/:id', (req, res) => {
    db.partners.remove({ _id: req.params.id }, {}, function(err, numRemoved) {
        if (numRemoved === 0) {
            res.status(404).end();
        } else {
            res.status(204).end();
        }
    })
})

module.exports = router