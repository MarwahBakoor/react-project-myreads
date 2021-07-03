import React from 'react';
import Book from './Book';

function Shelfs(props) {

        const booksList =props.books;
        return(
        
                    <ol className="books-grid">
                      { booksList.map((BookObject)=>( 
                      <Book BookObject = {BookObject} key={BookObject.id} updateBookshelf ={props.updateBookshelf} />
                       ))}
                    </ol>

        )
    }


export default Shelfs;