/**
 * copyright 2019 (C) ELAIYA
 *
 * created on: Aug, 2019
 * @author: Elaiya Raja E
 *
 * ---------------------------------------------------------
 * Revision History (Release 1.0.0)
 * ---------------------------------------------------------
 * VERSION | AUTHOR - DATE       | DESCRIPTION OF CHANGE
 * ---------------------------------------------------------
 * 1.0     | ELAIYA - 13-08-2019 | Initial Creation
 * ---------------------------------------------------------
 *
 */
import React, { Component } from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

//component
import BookDetails from './BookDetails';

export const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`

class BookList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
    }

    displayBooks() {
        var data = this.props.data;
        if(data.loading) {
            return (<div> Loding Books...</div>)
        } else {
             data.books.map(book=> {
                return (
                <li key={book.id} onClick={(e)=>{this.setState({selected: book.id})}}>{book.name}</li>
                )
            })
        }
    }
    render() {
        return (
            <div>
                <ul id="book-list">
                {this.displayBooks()}
            </ul>
            <BookDetails bookId={this.state.selected}/>
            </div>
        );
    }
}
export default graphql (getBooksQuery)(BookList);
