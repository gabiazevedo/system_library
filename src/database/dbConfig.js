const mongoose = require('mongoose');
require('dotenv').config();

const DB_CONNECTION = process.env.DB_URL;

mongoose.connect(DB_CONNECTION);
mongoose.Promise = global.Promise;

module.exports = mongoose;