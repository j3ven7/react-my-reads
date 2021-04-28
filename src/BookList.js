import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book.js'
import './App.css'


class BookList extends React.Component {

  static propTypes = {
    /** List of Book Components to render */
    books: PropTypes.array,
    /** Shelf to allow books from */
    bookListShelf: PropTypes.string,
    /** Title of the bookshelf */
    bookShelfTitle: PropTypes.string
  }

  render(){
    const { books, bookListShelf, bookShelfTitle } = this.props;
    return (
      <div className="bookshelf">
      <h2 className="bookshelf-title">{bookShelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        {books.filter(book => bookListShelf === '' && book.imageLinks !== undefined
          ? true :
          book.shelf === bookListShelf && book.imageLinks !== undefined
         )
          .map(
          ({authors, id, shelf, title, subtitle,
            imageLinks: {thumbnail},
          }) =>
          <li key={id}>
          <Book id={id} shelf={shelf} coverUrl={thumbnail} title={title} authors={authors} />
          </li>
        )}
        </ol>
      </div>
     </div>
    )
  }

}


export default BookList
