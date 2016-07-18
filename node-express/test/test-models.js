'use strict';

let expect = require('chai').expect;
let Article = require('../src/server/models').Article;

describe('test-models', function () {

  describe('Article', function () {

    describe('##gen', function () {
      it('should be ok', function () {
        return Article.gen()
          .then(article => {
            console.log('article:', article);
            expect(article).to.exist;
          });
      });
    });
  });

});

