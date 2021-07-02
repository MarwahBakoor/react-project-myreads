import React, {Component} from 'react';
import CurrentlyReading from './CurrentReading';
import WantToRead from './WantToRead';
import Read from './Read';
import OpenSearch from './OpenSearch';
import * as BooksAPI from './BooksAPI';

class ListBooks extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      currentlyReading : [],
      wantToRead : [],
      read: []
    }
  }

  filterMyBooks = (books) =>{
    books.filter((book)=>{
      switch(book.shelf) {
        case "currentlyReading":
          this.setState((books) => ({
           currentlyReading: [...books.currentlyReading, book ]
          }))
          break;
        case "wantToRead":
          this.setState((books) => ({
            wantToRead: [...books.wantToRead, book ]
          }))
          break;
        default:

          this.setState((books) => ({
            read: [...books.read, book ]
          }))
      }

    })

  }
  
  getAllBooks() {
    BooksAPI.getAll()
    .then((books)=>{
      this.filterMyBooks(books)
    })
  }

  updateBookshelfHandelr = (book, shelf)=>{
    BooksAPI.update(book,shelf); 
    const oldShelf = book.shelf
    const removeBook = this.state[book.shelf].filter((b)=> b.id !== book.id );
    this.setState((preveiceState)=>({
      [oldShelf]:removeBook,
      [shelf] : [...preveiceState[shelf],book]
      })) 
  book.shelf = shelf;
    }
  componentDidMount() {
    
    this.getAllBooks()
    
  }

    render(){
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <CurrentlyReading books={this.state.currentlyReading} updateBookshelf ={this.updateBookshelfHandelr} />
                <WantToRead books={this.state.wantToRead}  updateBookshelf ={this.updateBookshelfHandelr} />
                <Read books={this.state.read} updateBookshelf ={this.updateBookshelfHandelr} /> 
              </div>

              <OpenSearch />

            </div>
            
          </div>
        )
    }

}

export default ListBooks;