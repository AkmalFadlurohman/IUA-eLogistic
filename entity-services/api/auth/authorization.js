const debug = require('debug')('api:authorization');
const BaseResponse = require('../models/BaseResponse');

const authorization = (req, res, next) => {
    authorized = ['akmal', 'iqbal', 'um'];
    name = res.locals.tokenPayload.name;
    if (authorized.includes(name)) {
        debug('Authorized: '+name);
        next();
    } else {
        debug('Unauthorized: '+name);
        res.status(403).end();
    }
};

module.exports = authorization