import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './classes/Book';
import './App.css';
import BookFormModal from './components/BookFormModal';
import BookFormModalBtn from './components/BookFormModalBtn';
import BooksTable from './components/BooksTable';

class App extends React.Component {
  constructor() {
    super();
    this.handleBookFormChange = this.handleBookFormChange.bind(this);
    this.handleBookFormSubmit = this.handleBookFormSubmit.bind(this);
    this.handleReadStatusChange = this.handleReadStatusChange.bind(this);
    this.handleBookDelete = this.handleBookDelete.bind(this);
    this.state = {
      books: JSON.parse(localStorage.getItem('books')) || [],
      bookForm: {
        title: '',
        author: '',
        pages: '',
        readed: 'No',
      },
    };
  }

  _resetBookForm() {
    this.setState({
      bookForm: {
        title: '',
        author: '',
        pages: '',
        readed: 'No',
      },
    });
  }

  _setItem(itemName, item) {
    localStorage.setItem(itemName, JSON.stringify(item));
    this.setState({ [itemName]: item });
  }

  handleBookFormChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState((prevState) => {
      let bookForm = Object.assign({}, prevState.bookForm);
      bookForm[name] = value;
      return { bookForm };
    });
  }

  handleBookFormSubmit(e) {
    const { books, bookForm } = this.state;
    const { title, author, pages, readed } = bookForm;
    const book = new Book(uuidv4(), title, author, pages, readed);
    const newBooks = [...books, book];
    this._setItem('books', newBooks);
    this._resetBookForm();
    e.preventDefault();
  }

  handleReadStatusChange(e) {
    const domBook = e.target.parentElement.parentElement;
    const bookId = domBook.dataset.bookid;
    const booksCopy = this.state.books.slice();
    const book = booksCopy.find((book) => book.id === bookId);
    book.readed = book.readed === 'No' ? 'Yes' : 'No';
    this._setItem('books', booksCopy);
  }

  handleBookDelete(e) {
    const domBook = e.target.parentElement.parentElement;
    const bookId = domBook.dataset.bookid;
    const newBooks = this.state.books.filter((book) => book.id !== bookId);
    this._setItem('books', newBooks);
  }

  render() {
    const { bookForm, books } = this.state;

    return (
      <div className="App">
        <BookFormModal
          data={bookForm}
          handleChange={this.handleBookFormChange}
          handleSubmit={this.handleBookFormSubmit}
        />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <BookFormModalBtn />
              <BooksTable
                books={books}
                handleReadStatusChange={this.handleReadStatusChange}
                handleBookDelete={this.handleBookDelete}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
