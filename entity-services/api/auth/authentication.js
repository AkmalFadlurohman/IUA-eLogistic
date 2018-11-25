const debug = require('debug')('api:auth');
const token = require('./token');
const BaseResponse = require('../models/BaseResponse');

const authentication = (req, res, next) => {
    const authentication = req.header('Authorization');
    let clientToken;
    if (authentication) {
        clientToken = authentication.split(' ')[1];
    } else {
        clientToken = req.body.token || '';
    }

    try {
        payload = token.verify(clientToken);
        next();
    } catch(err) {
        debug(err.message);
        let response = new BaseResponse();
        delete response.collection.template;
        delete response.collection.items;
        response.collection.links.push({
            rel: 'login',
            href: response.collection.href+'/login'
        })
        res.header('WWW-Authentication', 'Bearer realm="api", error="invalid_token"');
        res.status(401).send(response);
    }
}

module.exports = authentication;