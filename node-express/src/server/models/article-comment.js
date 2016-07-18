'use strict';

const Schema = require('mongoose').Schema;

let articleCommentSchema = new Schema({
  author: {
    id: { type: String },
    name: { type: String },
    email: { type: String }
  },
  title: { type: String },
  content: { type: String },
  contentType: { type: String },
  creation_time: { type: Date, default: Date.now, index: true },
  last_modification_time: { type: Date, default: Date.now },
  parent_id: { type: Schema.Types.ObjectId, index: true },
  deletion_state: { type: Number }
});

module.exports.schema = articleCommentSchema;
module.exports.model = (db) => db.model('ArticleComment', articleCommentSchema);