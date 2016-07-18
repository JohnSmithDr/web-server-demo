'use strict';

const path = require('path');
const config = require('config');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./logger');

require('./models');

let app = express();
let port = config.get('application.port');

/// setup view engine
///
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.set('views', path.resolve(__dirname, 'views'));

/// setup body parser
///
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/// setup static path
///
app.use('/static', express.static(path.resolve(__dirname, '../static')));

/// setup middleware
///
app.use(require('./middleware/request-logger'));
app.use(require('./routes/index'));

/// handling error
///
app.use(require('./errors').defaultNotFoundHandler);
app.use(require('./errors').defaultErrorHandler);

/// start up
app.listen(port, (err) => {
  return err
    ? logger.error(err)
    : logger.info('server start on port:', port);
});