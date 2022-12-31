const { config } = require('dotenv');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const Private_key = process.env.JWT_PRIVATE_KEY;

const UserAuthencation = ({username, password}) => jwt.sign({username, password}, Private_key);
const Verify = (token) => jwt.verify(token, Private_key);

module.exports = {
    UserAuthencation, Verify
}
