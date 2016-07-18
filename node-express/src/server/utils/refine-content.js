'use strict';

module.exports = function refineContent(content) {
  return content
    .split(/[\r\n]+/)
    .map(s => `<p>${s}</p>`)
    .join('');
};
