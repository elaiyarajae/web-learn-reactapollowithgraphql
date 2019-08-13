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
import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

//components
import BookList from './components/BookList';
import AddBook from './components/AddBook';

//apollo client setup
const client = new ApolloClient ({
  uri:'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
        <h3>My Reading List</h3>
        <BookList/>
        <AddBook/>
      </div>
      </ApolloProvider>

    );
  }
}

export default App;
