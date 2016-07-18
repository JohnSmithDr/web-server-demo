'use strict';

const config = require('config');
const mongodbFactory = require('../utils/mongodb-factory');

let connStr = config.get('application.db.default').toString();
let conn = mongodbFactory(connStr);

module.exports.Article = require('./article').model(conn);
module.exports.ArticleComment = require('./article-comment').model(conn);