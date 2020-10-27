function Status() {
  function get(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success');
  }

  return { get };
}

module.exports = Status;
