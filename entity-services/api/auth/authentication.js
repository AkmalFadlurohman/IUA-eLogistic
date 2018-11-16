const debug = require('debug')('api:auth');
const token = require('./token');

const authentication = (req, res, next) => {
    const authentication = req.header('Authorization');
    let clientToken;
    if (authentication) {
        clientToken = authentication.split(' ')[1];
    } else {
        clientToken = req.body.token || req.query.token || '';
    }

    try {
        payload = token.verify(clientToken);
        next();
    } catch(err) {
        res.header('WWW-Authentication', 'Bearer realm="api", error="invalid_token"');
        res.status(401).end();
    }
}

module.exports = authentication;