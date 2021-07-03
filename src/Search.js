import React, {Component} from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import {Link} from 'react-router-dom';
class Search extends Component {
  state = {
    books: [],
    query:''
  }

  handleSubmit = (event) =>{
    event.preventDefault();
  }

  AddingshelfToMybooks =(allBooks) =>{
    const myBooks = this.props.myBooks
    return allBooks.map(ab => myBooks.find(mb => mb.id === ab.id ) || ab )
  }
  
  fetchBooks = () =>{
    const query = this.state.query;
    this.setState(prevState =>({...prevState, query}));
    if(query !== ''){
      BooksAPI.search(query)
      .then((booksList) => {
        if(booksList && booksList.error !== "empty query"){
          booksList = this.AddingshelfToMybooks(booksList)
          this.setState(prevState =>({books: booksList }))
        } else {
          this.setState(prevState =>({books:[]}))
        }
      })
    } else {
    console.log('here')
    this.setState(prevState =>({books:[]}))
  }
  }

  handleChange = (event) =>{
    this.setState({
      query:event.target.value
    })
    setTimeout(()=>{
      this.fetchBooks()
    }, 800)
  }


    render(){
      const  updateBookshelfHandelr = this.props.updateBookshelfHandelr;

        return(
            <div className="search-books">
            <div className="search-books-bar">
            <Link to ={{pathname: "/"}}> 
            <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
            </Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                
                */}
                <input type="text" placeholder="Search by title or author" value={this.state.value} onChange={this.handleChange}/>
                
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.books.map(b => <Book BookObject={b} key={b.id} updateBookshelf ={updateBookshelfHandelr} />)}
              </ol>
            </div>
          </div>
        )
    }

}

export default Search;