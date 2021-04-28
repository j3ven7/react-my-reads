import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList.js'
import SearchBar from './SearchBar.js'
import { getAll } from './BooksAPI.js'
import { Route, Link } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  render() {
    // Is this bad practice?
    getAll().then(res => {
      this.setState({books: res})
    })
    const { books } = this.state
    return (
      <div className="app">
          <Route exact path='/search' render={() => (
              <SearchBar />
          )}/>
          <Route exact path='/' render={() => (
             <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <BookList bookShelfTitle="Currently Reading" books={books} bookListShelf='currentlyReading'/>
                  <BookList bookShelfTitle="Want to Read" books={books} bookListShelf='wantToRead'/>
                  <BookList bookShelfTitle="Read" books={books} bookListShelf='read'/>
                </div>
              </div>
              <div className="open-search">
                <Link to="/search">
                  <button>Add a book</button>
                </Link>
              </div>
            </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
