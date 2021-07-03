import React, {Component} from 'react';
import CurrentlyReading from './CurrentReading';
import WantToRead from './WantToRead';
import Read from './Read';
import OpenSearch from './OpenSearch';
import * as BooksAPI from './BooksAPI';

class ListBooks extends Component {

  
  

    render(){
      const myBooks = this.props.myBooks;
      const  updateBookshelfHandelr = this.props.updateBookshelfHandelr;
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <CurrentlyReading books={ myBooks.currentlyReading} updateBookshelf ={updateBookshelfHandelr} />
                <WantToRead books={ myBooks.wantToRead}  updateBookshelf ={updateBookshelfHandelr} />
                <Read books={myBooks.read} updateBookshelf ={updateBookshelfHandelr} /> 
              </div>

              <OpenSearch />

            </div>
            
          </div>
        )
    }

}

export default ListBooks;