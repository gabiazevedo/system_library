const rescue = require('express-rescue');
const Book = require('../model/Books');

const getAllBooks = rescue(async (_req, res) => {
  const books = await Book.find({});
  return res.status(200).json(books);
});

const createBook = rescue(async (req, res) => {
  const { title } = req.body;

  if (await Book.findOne({ title })) {
    return res.status(400).json({ message: `This title: '${title}' already exists`});
  };
  const book = await Book.create(req.body);
  book.save();
  return res.status(201).json(book);
});

module.exports = {
  getAllBooks,
  createBook
};
