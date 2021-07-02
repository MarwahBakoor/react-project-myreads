import React, {Component} from 'react';
import Book from './Book';


class Read extends Component {
    render(){
      const readBooks =this.props.books;
        return(
            <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                   { readBooks.map((BookObject)=>( 

                   <Book BookObject = {BookObject} key={BookObject.id} updateBookshelf ={this.props.updateBookshelf} /> 
                   
                   )) }
                    </ol>
                  </div>
                </div>
        )
    }
}

export default Read;