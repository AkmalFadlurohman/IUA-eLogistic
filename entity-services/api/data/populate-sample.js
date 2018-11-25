const Datastore = require('nedb');
const crypto = require('crypto');

db = require('../store');

const add_item = (size, owner, location) => {
    db.items.insert({size, owner, location}, () => {
        console.log("Item created.")
    })
}

const add_company = (name, pass, items) => {
    const password = crypto.createHash('md5').update(pass).digest('hex');
    db.partners.insert({name, password, items}, () => {
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
        add_company('iqbal', 'iqbal', []);
        add_company('akmal', 'akmal', []);
        add_company('um', 'um', []);
        db.partners.insert({ _id: 'xxx', name: 'cloud', password: 'cloud', items: []})
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