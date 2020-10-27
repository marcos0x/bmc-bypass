require('dotenv').config();
const { argv } = require('yargs');

const nodeEnv = argv.env || process.env.NODE_ENV || 'development';
const config = {
  development: require('./development'),
  preview: require('./preview'),
  testing: require('./testing'),
  production: require('./production'),
};

module.exports = {
  env: nodeEnv,
  port: process.env.PORT || 3000,
  secret: nodeEnv === 'production' || nodeEnv === 'preview' ? process.env.SECRET : 'secret',
  session: {
    secret: 'bmcbypass',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
  },
  ...config[nodeEnv]
};
