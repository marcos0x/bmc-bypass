const api = require('../lib/api');

function Links() {
  function post(req, res) {
    return api.createLinks(req)
      .then(({ code, headers, body }) => {
        res.writeHead(code, headers);
        res.end(body);
      })
      .catch(({ code, headers, body }) => {
        res.writeHead(code, headers);
        res.end(body);
      });
  }

  return { post };
}

module.exports = Links;
