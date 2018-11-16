const jwt = require('jsonwebtoken');

const secret = process.env.TOKEN || 'himitsu';

const generate = (subject) => {
    payload = {
        name: subject
    };
    options = {
        subject,
        expiresIn: '24h'
    }
    return jwt.sign(payload, secret);
}

const verify = (token) => {
    // try {
    //     return jwt.verify(token, secret);
    // } catch(err) {
    //     return err;
    // }
    return jwt.verify(token, secret);
}

const token = {
    generate, 
    verify
}

module.exports = token;