'use strict';

const HttpError = require('http-error');
const logger = require('./logger');

module.exports.defaultNotFoundHandler = (req, res, next) => {
  next(new HttpError.NotFound('Not Found'));
};

module.exports.defaultErrorHandler = (err, req, res, next) => {

  logger.error(err);

  if (req.accepts('html')) {
    return res.render('error', err);
  }
  else if (req.accepts('json')) {
    return res
      .status(err.code)
      .json({
        code: err.code,
        error: err.message
      });
  }
  else {
    res.status(err.statusCode).send(err.message);
  }
  
};