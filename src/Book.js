import React from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger.js'
import { update } from './BooksAPI.js'


class Book extends React.Component {

  state = {
    /** The shelf option for the book */
    selectedOption: ''
  }

  static propTypes = {
    /** Unique ID for the book. */
    id: PropTypes.string,
    /** URL for the cover art */
    coverUrl: PropTypes.string,
    /** Book Title */
    title: PropTypes.string,
    /** String list of book authors */
    authors: PropTypes.array,
    /** Shelf the book is on */
    shelf: PropTypes.string
  }

  // Todo: Need to send an update request back to the Db.
  onSetOption = (optionValue) => {
    this.setState(() => ({
      selectedOption: optionValue
    }))
    update(this.props, optionValue)
    .then(res => console.log(`Updated with ${optionValue}`))
  }


  render(){
    const { coverUrl, title, authors, shelf } = this.props;
    return (
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{width: 128, height: 193, backgroundImage: `url(${coverUrl})`}}>
            </div>
            <BookShelfChanger shelf={shelf !== undefined ? shelf : 'None'} onSetOption={this.onSetOption}/>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors}</div>
       </div>
  )
  }

}

export default Book
