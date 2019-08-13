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

const getBooksQuery = gql`
    query($id: ID) {
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    name
                    id
                }
            }
        }
    }
`

class BookDetails extends Component {

    displayBookDetails() {
        const {book} = this.props.data
        if(book) {
            return (
                <div>
                    <h2>{book.name}</h2>
                    <p>{book.genre}</p>
                    <p>{book.author.name}</p>
                    <p>All books by this author:</p>
                    <ul className="other-books">
                        {book.author.books.map(item=> {
                            return <li key={item.id}>{item.name}</li>
                        })
                        }
                    </ul>
                </div>
            )
        } else {
            return(
                <div>No books selected...</div>
            )
        }
    }

    render() {
        //console.log(this.props);
        return(
            <div id="book-details">
                {this.displayBookDetails()}
            </div>
        );
    }
}

export default graphql (getBooksQuery, {
    options:(props)=> {
        return{
            variables: {
                id:props.bookId
            }
        }
    }
})(BookDetails);
