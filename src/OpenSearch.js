import React, { Component } from "react";


class OpenSearch extends Component {
        render(){
            return(
                <div className="open-search">
                    <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                </div>
            )
        }
}

export default OpenSearch;