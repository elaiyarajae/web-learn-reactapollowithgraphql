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
import React, { Component } from 'react'
import {gql} from 'apollo-boost';
import {compose, graphql } from 'react-apollo';
import {getBooksQuery} from './BookList';

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`

const addBookMutation = gql`
    mutation($name:String!, $genre: String!, $authorId: ID! ) {
        addBook(name:$name, genre:$genre, authorId:$authorId) {
            name
            id
        }
    }
`
/*const addBookMutation = gql`
    mutation($name:String!, $genre: String!, $authorId: ID! ) {
        addBook(name:"", genre:"", authorId:"") {
            name
            id
        }
    }
`*/

class AddBook extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name:'',
            genre:'',
            authorId:''
        }
    }

    displayAuthors() {
        var data = this.props.getAuthorsQuery;
        if(data.loading) {
            return (<option disabled>Loading Authors...</option>);
        }else {
            return (data.authors.map(author=> {
                return(<option key={author.id} value={author.id}>{author.name}</option>);
            }))
        }
    }

    submitForm(e) {
        e.preventDefault();
        //console.log(this.state);
        this.props.addBookMutation({
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId
            },
            refetchQueries: [{query:getBooksQuery}]
        });
    }

    render() {
        return (
            <form id="add-book" onSubmit={this.submitForm.bind(this)}>
                <div className="field">
                    <label>Book Name </label>
                    <input type="text" onChange={(e)=> this.setState({name: e.target.value})}/>
                </div>
                <div className="field">
                    <label>Genre </label>
                    <input type="text" onChange={(e)=> this.setState({genre: e.target.value})}/>
                </div>
                <div className="field">
                    <label>Author </label>
                    <select onChange={(e)=> this.setState({authorId: e.target.value})}>
                        <option>select Author</option>
                        {this.displayAuthors()}
                    </select>
                </div>
                <button>Add Book</button>
            </form>
        );
    }
}
//export default graphql(getAuthorsQuery)(addBookMutation)(AddBook);
export default compose (
    graphql(getAuthorsQuery,{name:"getAuthorsQuery"}),
    graphql(addBookMutation,{name: "addBookMutation"})
)(AddBook);
