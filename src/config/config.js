const dotenv = require('dotenv');

dotenv.config();

const config = {
  PORT: process.env.PORT ?? 5555,
  DEFAULT_HEADERS: { 'content-type': 'application/json' },
};

module.exports = config;
