import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Input, FormBtn } from "../components/Form";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks();
  }, []);

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then((res) => loadBooks())
      .catch((err) => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveBook({
        title: formObject.title,
        author: formObject.author,
      })
        .then((res) => loadBooks())
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Jumbotron />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <form className="BookSearch clearfix">
            <Input
              onChange={handleInputChange}
              name="title"
              placeholder="Title (required)"
            />
            <FormBtn
              disabled={!(formObject.author && formObject.title)}
              onClick={handleFormSubmit}
            >
              Submit Book
            </FormBtn>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {books.length ? (
            <List>
              {books.map((book) => (
                <ListItem key={book._id}>
                  <Link to={"/books/" + book._id}>
                    <div className="card">
                      <div className="card-header">
                        <div className="row">
                          <div className="col-sm-10">
                            <h5>{book.title}</h5>
                          </div>
                          <div className="col-sm-2">
                            <button type="button" className="btn btn-secondary">
                              View
                            </button>
                            <button type="button" className="btn btn-primary">
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <p className="card-title">{book.link}</p>
                            <p className="card-text">{book.author}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-2">
                            <img src={book.image} alt={book.author} style={{ height: "100px", width: "100px" }}></img>
                          </div>
                          <div className="col-sm-10">
                            <p className="card-description">
                              {book.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <DeleteBtn onClick={() => deleteBook(book._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default Books;
