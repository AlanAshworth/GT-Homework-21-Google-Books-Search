const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
  authors: [
    {
      type: {
        type: String,
        required: true
      },
      name: {
        type: String,
      },
    },
  ],
  description: {
    type: String,
    default: ""
  },
  // url string for thumbnail image
  image: {
    type: String,
    default: ""
  },
  // url for book information - unique index
  link: {
    type: String,
    default: "",
    unique: true
  },
  title: {
    type: String,
    default: "",
    required: true
  },

  // Not all ingredients, just the recommended ingredients from scraped web pages
  // from which seed data was sourced
  ingredients: [String]
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;