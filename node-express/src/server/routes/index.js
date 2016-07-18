'use strict';

const path = require('path');
const logger = require('../logger');

let router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.get('/files/:name', (req, res) => {

  let options = {
    root: path.resolve(__dirname, '../../static'),
    dotfiles: 'deny'
  };

  let fileName = req.params.name;
  res.sendFile(fileName, options, (err) => {
    if (err) {
      logger.error(err);
      res.status(err.status).end();
    }
    else {
      logger.debug('file sent:', fileName);
    }
  });

});

module.exports = router;