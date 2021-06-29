import React, {Component} from 'react';
import CurrentlyReading from './CurrentReading';
import WantToRead from './WantToRead';
import Read from './Read';
import OpenSearch from './OpenSearch';
class ListBooks extends Component {

    render(){
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <CurrentlyReading />
                <WantToRead />
                <Read /> 
              </div>

              <OpenSearch />

            </div>
            
          </div>
        )
    }

}

export default ListBooks;