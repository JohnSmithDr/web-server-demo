'use strict';

const HttpError = require('http-error');
const Article = require('../models').Article;
const logger = require('../logger');

let router = require('express').Router();

router.get('/', (req, res) => {

});

router.get('/:id', (req, res, next) => {

  Article.findById(req.params.id)
    .then(article => {
      return article
        ? res.render('article', article)
        : Promise.reject(new HttpError.NotFound('Article Not Found'));
    })
    .catch(err => {
      logger.error(err);
      return next(err);
    });
});

router.post('/', (req, res, next) => {

  Article.gen()
    .then(article => {
      return res.redirect(`/articles/${article.id}`);
    })
    .catch(err => {
      logger.error(err);
      return next(err);
    });
});

module.exports = router;