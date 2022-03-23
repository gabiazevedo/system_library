const mongoose = require('../database/dbConfig');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
  },
  authors: [String],
  createAt: {
    type: Date,
    default: Date.now,
  },
},
{ versionKey: false });

module.exports = mongoose.model('Book', BookSchema);
