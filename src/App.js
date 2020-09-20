import React from 'react';
import './App.css';
import BookFormModal from './components/BookFormModal';
import BookFormModalBtn from './components/BookFormModalBtn';
import BooksTable from './components/BooksTable';

class App extends React.Component {
  constructor() {
    super();
    this.handleBookFormChange = this.handleBookFormChange.bind(this);
    this.state = {
      books: [
        {
          title: 'Book Title Example 1',
          author: 'Book Title Author 1',
          pages: 100,
          readed: true,
        },
        {
          title: 'Book Title Example 2',
          author: 'Book Title Author 2',
          pages: 200,
          readed: false,
        },
      ],
      bookForm: {
        title: '',
        author: '',
        pages: '',
        readed: 'No',
      },
    };
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

  render() {
    const { bookForm, books } = this.state;

    return (
      <div className="App">
        <BookFormModal
          data={bookForm}
          handleChange={this.handleBookFormChange}
        />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <BookFormModalBtn />
              <BooksTable books={books} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
