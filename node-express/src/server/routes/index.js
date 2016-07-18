'use strict';

const path = require('path');
const logger = require('../logger');

let router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.use('/articles', require('./articles'));
router.use('/files', require('./files'));

module.exports = router;