'use strict';

const Schema = require('mongoose').Schema;

let articleSchema = new Schema({
  author: {
    id: { type: String },
    name: { type: String },
    email: { type: String }
  },
  meta: {
    reads: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    up_votes: { type: Number, default: 0 },
    down_votes: { type: Number, default: 0 }
  },
  title: { type: String },
  content: { type: String },
  contentType: { type: String },
  creation_time: { type: Date, default: Date.now, index: true },
  last_modification_time: { type: Date, default: Date.now },
  publication_time: { type: Date, index: true },
  tags: [String],
  deletion_state: { type: Number }
});

module.exports.schema = articleSchema;
module.exports.model = (db) => db.model('Article', articleSchema);