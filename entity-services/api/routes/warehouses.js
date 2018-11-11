const express = require('express');
const router = express.Router();
const debug = require('debug')('api:warehouses');
const db = require('../store');
const WarehouseResponse = require('../models/WarehouseResponse');

router.get('/', (req, res) => {
    db.warehouses.find({}, function(err, docs) {
        let response = new WarehouseResponse(docs);
        res.status(200).json(response.collection);
    })
})

router.get('/:id', (req, res) => {
    db.warehouses.find({ _id: req.params.id }, function(err, docs) {
        res.status(200).json(docs);
    })
})

module.exports = router