import React from 'react';
import './App.css';
import BookFormModal from './components/BookFormModal';
import BookFormModalBtn from './components/BookFormModalBtn';
import BooksTable from './components/BooksTable';

const books = [
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
];

function App() {
  return (
    <div className="App">
      <BookFormModal />
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

export default App;
