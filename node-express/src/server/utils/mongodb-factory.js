'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const logger = require('../logger');

/**
 * @param {string} connStr
 * @returns {Mongoose}
 */
module.exports = function mongodbFactory(connStr) {
  let conn = mongoose.createConnection(connStr);
  conn.on('error', logger.error.bind(logger, 'mongodb connection error:'));
  conn.once('open', () => logger.info('mongodb connection opened:', connStr));
  return conn;
};