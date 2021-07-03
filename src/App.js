import React from 'react';
import Search from './Search';
import ListBooks from './ListBooks';
import './App.css';
import * as BooksAPI from './BooksAPI';
import {Route} from 'react-router-dom';


class BooksApp extends React.Component {
  state = { 
    myBooks : [], 
    currentlyReading : [],
    wantToRead : [],
    read: []
  }


componentDidMount() {
   // Runs after the first render() lifecycle
    this.getAllBooks()   
  }

getAllBooks() {
    BooksAPI.getAll() // get all My Book List
    .then((books)=>{
      this.setState((Previcestste) => ({
        myBooks: books // add my book list state
      }))
      this.filterMyBooks(books) // Calling filter method
    })
  }

  filterMyBooks = (myBookList) =>{
    // filter books in three categories {currentlyReading, wantToRead, read}
    myBookList.filter((b)=>{ 
          this.setState((Previcestste) => ({
           [b.shelf]: [...Previcestste[b.shelf], b ] 
          }))
    })
  }


  updateBookshelfHandelr = (book, shelf)=>{
    // Change the book shelf 
    BooksAPI.update(book,shelf).then(() => {
      // Updae the clint side
      if(book.shelf && book.shelf !== "none"){
        //Check if book have shelf befor reomving it from state shelf
        this.removeBookFromShelf(book)
      }
      if(shelf !== "none"){
        //Check if book moving to one of the shelf that in the main page
        this.addBookToShelf(shelf,book)
      }
      // update the shelf in the object
      book.shelf = shelf;
    })
    }

    removeBookFromShelf = ( oldBook )=>{
      // remove the book from old shelf
      const removeBook = this.state[oldBook.shelf].filter((b)=> b.id !== oldBook.id );
      this.setState((preveiceState) =>({
        [oldBook.shelf]:removeBook
      }))
    }

    addBookToShelf =(newShelf,book) =>{
      // add the book to new shelf
      this.setState((preveiceState)=>({
        [newShelf] : [...preveiceState[newShelf], book]
      }))
    }

  


  render() {
    return (
      <div className="app">
      
          <Route exact path='/' render = {() => (
            <ListBooks 
            myBooks={this.state}  
            updateBookshelfHandelr ={this.updateBookshelfHandelr} />
          )} />

          <Route exact path='/search' render = {() => (
          <Search myBooks={this.state.myBooks} 
          updateBookshelfHandelr ={this.updateBookshelfHandelr}  /> 
          )}/>

          

      </div>
    )
  }
}

export default BooksApp
