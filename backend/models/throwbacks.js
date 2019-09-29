

// Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Connect to mongodb.
const mongoUri = process.env.MONGO_URI ||'mongodb://localhost:27017/stored-throwbacks';
mongoose.connect(mongoUri);

const ThrowbackSchema = new Schema({
  startThrowback: {
    type: Boolean,
    default: false
  },
});

// Variable for export that extends to other parts of application.
const StoredThrowback = mongoose.model('urls', ThrowbackSchema);

module.exports = StoredThrowback;