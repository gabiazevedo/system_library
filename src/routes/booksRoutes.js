const express = require('express');
const routes = express.Router();

const { getAllBooks, createBook } = require('../controllers/booksControllers');

routes.get('/', getAllBooks);
routes.post('/', createBook);

module.exports = routes;
