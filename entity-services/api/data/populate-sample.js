const Datastore = require('nedb');
const fs = require('fs');

db = require('../store');

const add_item = (size, owner, location) => {
    db.items.insert({size, owner, location}, () => {
        console.log("Item created.")
    })
}

const add_company = (name, items) => {
    db.partners.insert({name, items}, () => {
        console.log("PartnerCompany created.")
    })
}

const add_warehouses = (address, capacity, items) => {
    db.warehouses.insert({address, capacity, items}, () => {
        console.log("Warehouse created.")
    })
}

const add_request = (status, price, date, items, requester, type, info) => {
    db.requests.insert({status, price, date, items, requester, type, ...info}, () => {
        console.log("Request created.")
    })
}

const populate = () => {
    if (!db.items.find({}, (err, docs) => docs.length)) {
        console.log('Populating items...');
        add_item(10, 'iqbal', null);
        add_item(10, 'iqbal', null);
        add_item(12, 'iqbal', null);
        db.items.insert({ _id: 'xxx', size: 11, owner: 'iqbal', location: null})
    }

    if (!db.partners.find({}, (err, docs) => docs.length)) {
        console.log('Populating partners...');
        add_company('iqbal', []);
        add_company('akmal', []);
        add_company('um', []);
        db.partners.insert({ _id: 'xxx', name: 'iqbal', items: []})
    }

    if (!db.warehouses.find({}, (err, docs) => docs.length)) {
        console.log('Populating warehouses...');
        add_warehouses('Bandung', 10000, []);
        add_warehouses('Jakarta', 20000, []);
        add_warehouses('Malang', 30000, []);
        db.warehouses.insert({ _id: 'xxx', address: 'Jogja', capacity: 15000, items: []})
    }
}

const clean = () => {
    
}

module.exports = populate;