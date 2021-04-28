import React from 'react'
import BookList from './BookList.js'
import { search } from './BooksAPI.js'
import { Link } from 'react-router-dom'

class SearchBar extends React.Component {

  state = {
    /** The books returned by the query */
    books: []
  }

  handleOnChange = (query) => {
  if (query !== undefined && query !== ""){
    search(query)
      .then(
          res => this.setState(() => ({
            books: res === undefined || res.error !== undefined ? [] : res,
          }))
      )
  } else {
    this.setState(() => ({
      books: []
    }))
  }

  }

  render(){
    const { books } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
            type="text"
            onChange={(event) => this.handleOnChange(event.target.value)}
            placeholder="Search by title or author"
            />
          </div>
        </div>
      <div className="search-books-results">
        <BookList bookShelfTitle="Search Results" books={books} bookListShelf=''/>
      </div>
      </div>

  )
  }

}

export default SearchBar
