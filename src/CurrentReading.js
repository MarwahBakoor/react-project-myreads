import React, {Component} from 'react';
import Book from './Book';

class CurrentlyReading extends Component {
    render(){
        const CRBooks =this.props.books; 
        return(
            <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {CRBooks.map((BookObject)=>( 
                      <Book BookObject = {BookObject} key={BookObject.id} updateBookshelf ={this.props.updateBookshelf} /> 
                      
                      ))}
                    </ol>
                  </div>
            </div>

        )
    }
}

export default CurrentlyReading;