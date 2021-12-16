const mongoose = require('mongoose');
/* eslint-disable no-unused-vars */
const db = require('./dbIndex.js');
/* eslint-disable no-unused-vars */

const testSchema = mongoose.Schema({
  property: String,
})

const test = mongoose.model('test', testSchema);

module.exports = test;