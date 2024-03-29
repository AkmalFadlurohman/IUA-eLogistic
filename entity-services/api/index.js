const http = require('http');
const express = require('express');

const items = require('./routes/items');
const warehouses = require('./routes/warehouses');
const partners = require('./routes/partners');
const requests = require('./routes/requests');
const login = require('./routes/login');
const authentication = require('./auth/authentication');
const authorization = require('./auth/authorization');

const DBG = require('debug');
const debug = DBG('api:debug');
const error = DBG('api:error');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));

app.all('/api/*', authentication);
app.all('/api/*', authorization);
app.use('/api/items', items);
app.use('/api/warehouses', warehouses);
app.use('/api/partners', partners);
app.use('/api/requests', requests);
app.use('/login', login)

app.get('/', (req, res) => {
    return res.status(200).redirect('/api')
})

app.get('/api', (req, res) => {
    return res.status(200).json({
        collection: {
            version: '1.0',
            href: '/api',
            links: [
                {rel: 'items', href: '/api/items'},
                {rel: 'partners', href: '/api/partners'},
                {rel: 'warehouses', href: '/api/warehouses'},
                {rel: 'requests', href: '/api/requests'},
                {rel: 'login', href: '/login'}
            ]
        }
    })
})

//Populating DB
const populate = require('./data/populate-sample')();

const server = http.createServer(app)
server.listen(app.get('port'), function() {
    console.log('Server is running...');
    debug('Listening on port ' + app.get('port'));
})
