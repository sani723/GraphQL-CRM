import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Routes from './components/ui/Routes';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// Apollo client setup
const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
  });

ReactDOM.render(
    <ApolloProvider client={client}>
        <Routes>
            <App />
        </Routes>
    </ApolloProvider>, 
    document.getElementById('dubai'));
