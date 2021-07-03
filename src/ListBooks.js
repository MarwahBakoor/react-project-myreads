import React from 'react';
import Shelf from './Shelfs';
import OpenSearch from './OpenSearch';

function ListBooks(props) {
      const myBooks = props.myBooks;
      const  updateBookshelfHandelr = props.updateBookshelfHandelr;
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                  <div className="bookshelf">
                      <h2 className="bookshelf-title">Currently Reading</h2>
                      <Shelf books={myBooks.currentlyReading} updateBookshelf ={updateBookshelfHandelr} />
                    </div>
                    <div className="bookshelf">
                          <h2 className="bookshelf-title">Want to Read</h2>
                          <Shelf books={ myBooks.wantToRead} updateBookshelf ={updateBookshelfHandelr} />
                    </div>
                    <div className="bookshelf">
                          <h2 className="bookshelf-title">Read</h2>
                          <Shelf books={myBooks.read} updateBookshelf ={updateBookshelfHandelr} />
                    </div>
              </div>

              <OpenSearch />

            </div>
            
          </div>
        )
    }


export default ListBooks;