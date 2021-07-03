import React from "react";
import { Link } from 'react-router-dom';

function OpenSearch() {
            return(
                <div className="open-search">
                    <Link to ={{pathname: "/search"}}>
                    <button>Add a book</button>
                    </Link>
                </div>
            )
        }

export default OpenSearch;