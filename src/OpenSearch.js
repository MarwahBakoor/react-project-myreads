import React, { Component } from "react";
import {Link} from 'react-router-dom';

class OpenSearch extends Component {
        render(){
            return(
                <div className="open-search">
                    <Link to ={{pathname: "/search"}}>
                    <button>Add a book</button>
                    </Link>
                </div>
            )
        }
}

export default OpenSearch;