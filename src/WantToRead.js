import React, {Component} from 'react';
import Book from './Book';

class WantToRead extends Component {
    render(){
        const WToRbooks =this.props.books;
        return(
            <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      { WToRbooks.map((BookObject)=>( 
                      <Book BookObject = {BookObject} key={BookObject.id} updateBookshelf ={this.props.updateBookshelf} />
                       ))}
                    </ol>
                  </div>
                </div>
        )
    }
}

export default WantToRead;