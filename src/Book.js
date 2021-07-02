import React, {Component} from 'react';


class Book extends Component {
    state ={
      selected: this.props.BookObject.shelf
    }

    onChangeEvent = (event) =>{
      this.props.updateBookshelf(this.props.BookObject,event.target.value);
      
    }

    render(){
      const book = this.props.BookObject;
      console.log(book.authors)
        return(
          <li>
              <div className="book">
                 <div className="book-top">
                   <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.smallThumbnail :'' })` }}></div>
                      <div className="book-shelf-changer">
                              <select value={this.state.selected} onChange={this.onChangeEvent}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read" selected>Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors ? book.authors.map(a => a): '' }</div>
                        </div>
            </li>
        )
    }

}

export default Book;