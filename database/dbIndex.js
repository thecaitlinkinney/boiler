const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;

db.on('error', () => {
  new Error('Mongoose connection error');
});

db.once('open', () => {
  console.log('Mongoose connected successfully');
})

module.exports = db;
