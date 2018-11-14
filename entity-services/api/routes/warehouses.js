const express = require('express');
const router = express.Router();
const debug = require('debug')('api:warehouses');
const db = require('../store');
const WarehouseResponse = require('../models/WarehouseResponse');

router.get('/', (req, res) => {
    db.warehouses.find({}, function(err, docs) {
        let response = new WarehouseResponse(docs);
        res.status(200).json(response.getCollection());
    })
})

router.post('/', (req, res) => {
    const template = req.body.template;
    const doc = WarehouseResponse.toObject(template);
    db.warehouses.insert(doc, function(err, newDoc) {
        res.location(req.baseUrl+'/'+newDoc._id).status(201).end();
    })
})

router.get('/:id', (req, res) => {
    db.warehouses.find({ _id: req.params.id }, function(err, docs) {
        if (docs.length === 0) {
            res.status(404).end();
        } else {
            let response = new WarehouseResponse(docs);
            res.status(200).json(response.getCollection());
        }
    })
})

router.put('/:id', (req, res) => {
    const template = req.body.template;
    const doc = WarehouseResponse.toObject(template);
    db.warehouses.update({ _id: req.params.id }, { $set: doc }, {}, function(err, numReplaced) {
        if (numReplaced === 0) {
            res.status(404).end();
        } else { 
            res.status(200).end();
        }
    })
})

router.delete('/:id', (req, res) => {
    db.warehouses.remove({ _id: req.params.id }, {}, function(err, numRemoved) {
        if (numRemoved === 0) {
            res.status(404).end();
        } else {
            res.status(204).end();
        }
    })
})

module.exports = router