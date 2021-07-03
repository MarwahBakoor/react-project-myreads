import React, {Component} from 'react';

class Book extends Component {
    state ={
      select: this.props.BookObject.shelf // the selected shelf
    }

    onChangeEvent = (event) =>{
      this.props.updateBookshelf(this.props.BookObject,event.target.value);    
    }

    render(){
      const book = this.props.BookObject;
        return(
          <li>
              <div className="book">
                 <div className="book-top">
                   <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.smallThumbnail :'' })` }}></div>
                      <div className="book-shelf-changer">
                              <select defaultValue={this.state.select || "none"} onChange={this.onChangeEvent}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read" >Read</option>
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