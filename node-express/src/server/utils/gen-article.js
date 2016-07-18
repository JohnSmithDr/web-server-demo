'use strict';

const lorem = require('lorem-ipsum');
const randomName = require('random-name');

module.exports = function genArticle() {

  /**
   * @type {string}
   */
  let name = randomName();
  let email = name.toLowerCase().replace(/[\s']+/g, '_') + '@example.org';

  let title = lorem({ count: 1, units: 'sentences' });
  let content = lorem({ count: 100, units: 'paragraphs' });
  let contentType = 'text';
  let publication_time = Date.now();

  return {
    title,
    content,
    contentType,
    publication_time,
    author: { name, email }
  };

};