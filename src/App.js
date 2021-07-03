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
    
    this.getAllBooks()
    
  }

  filterMyBooks = (allBooks) =>{
    allBooks.filter((b)=>{
          this.setState((Previcestste) => ({
            myBooks: allBooks,
           [b.shelf]: [...Previcestste[b.shelf], b ]
          }))
    })
  }


  updateBookshelfHandelr = (book, shelf)=>{
    BooksAPI.update(book,shelf); 
    const oldShelf = book.shelf
    const removeBook = this.state[book.shelf]? this.state[book.shelf].filter((b)=> b.id !== book.id ) : null;
    this.setState((preveiceState)=>({
      [oldShelf]:removeBook,
      [shelf] : [...preveiceState[shelf],book]
      })) 
      book.shelf = shelf;
    }

  getAllBooks() {
    BooksAPI.getAll()
    .then((books)=>{
      this.filterMyBooks(books)
    })
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
