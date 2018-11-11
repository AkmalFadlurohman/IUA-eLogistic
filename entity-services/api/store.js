const Datastore = require('nedb');

db = {};
db.items = new Datastore('./data/items.db');
db.partners = new Datastore('./data/partners.db');
db.warehouses = new Datastore('./data/warehouses.db');
db.requests = new Datastore('./data/requests.db');

db.items.loadDatabase();
db.partners.loadDatabase();
db.warehouses.loadDatabase();
db.requests.loadDatabase();

module.exports = db;