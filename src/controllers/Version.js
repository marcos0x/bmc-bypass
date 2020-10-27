const config = require('../config');

function Version() {
  function get(req, res, next) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ env: config.env, version: process.env.VERSION || 'v1' }));
  }

  return { get };
}

module.exports = Version;
