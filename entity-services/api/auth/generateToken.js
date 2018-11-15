const jwt = require('jsonwebtoken');

const generateToken = (subject) => {
    payload = {
        name: subject
    };
    secret = process.env.TOKEN || 'himitsu';
    options = {
        subject,
        expiresIn: '24h'
    }
    return jwt.sign(payload, secret);
}

module.exports = generateToken;