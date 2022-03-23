const express = require('express');
const booksRoutes = require('./src/routes/booksRoutes');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/books', booksRoutes);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
