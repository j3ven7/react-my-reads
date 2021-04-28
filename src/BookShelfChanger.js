import React from 'react'
import PropTypes from 'prop-types'


class BookShelfChanger extends React.Component {

  static propTypes = {
    /** Function to run when an option is set.*/
    onSetOption: PropTypes.func,
    /** Shelf the book is on */
    shelf: PropTypes.string
  }

  // Todo: Need to make sure the default is set for this chooser.
  render(){
    const { onSetOption, shelf } = this.props;
    return (
        <div className="book-shelf-changer">
          <select onChange={(event) => onSetOption(event.target.value)} defaultValue={shelf}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="None">None</option>
          </select>
        </div>
  )
  }

}

export default BookShelfChanger
