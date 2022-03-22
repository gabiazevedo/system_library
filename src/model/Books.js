const mongoose = require('mongoose');

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
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
