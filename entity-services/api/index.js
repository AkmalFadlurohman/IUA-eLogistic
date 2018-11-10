const http = require('http');
const express = require('express');

const DBG = require('debug');
const debug = DBG('api:debug');
const error = DBG('api:error');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.set('port', process.env.PORT || 3000)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'))

app.get('/', (req, res) => {
    return res.status(200).send(
        'e-Logistik entity services API.'
    )
})

const server = http.createServer(app)
server.listen(app.get('port'), function() {
    console.log('Server is running...');
    debug('Listening on port ' + app.get('port'));
})
