const express = require('express');
const session = require('express-session');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorhandler = require('errorhandler');
const methods = require('methods');
const methodOverride = require('method-override');
const config = require('./config');

const app = express();
const { port, isDev } = config;

app.use(cors());

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(methodOverride());
app.use(express.static(path.join(__dirname, '/../public')));

app.use(session(config.session));

if (isDev) {
  app.use(errorhandler());
}

app.use(require('./routes'));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development / will print stacktrace
if (isDev) {
  app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(err.status || 500);
    res.json({
      error: err,
      errorMessage: err.message
    });
  });
}

// production / no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: err,
    errorMessage: err.message
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../public/index.html`));
});

app.listen(port, () => console.log(`Server running on port ${port}`));
