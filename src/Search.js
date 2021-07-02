import React, {Component} from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class Search extends Component {
  state = {
    //value:'',
    books: [],
    query:''
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    
  }

  handleChange = (event) =>{
    this.setState({
      value:event.target.value
    })
    const query = event.target.value;
    this.setState(prevState =>({...prevState, query}));
    if(query !== ''){
    BooksAPI.search(query)
    .then((booksList) => {
      if(booksList.error !== "empty query"){
        this.setState({books: booksList })
      } else {
        this.setState({books:[]})
      }
    })
  } else {
    console.log('here')
    this.setState({books:[]})
  }

  }


    render(){

        return(
            <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
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
                {this.state.books.map(b => <Book BookObject={b} key={b.id} />)}
              </ol>
            </div>
          </div>
        )
    }

}

export default Search;