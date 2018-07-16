import * as React from "react";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Nav from './components/ui/Nav';
import Sidebar from './components/ui/Sidebar';
import Contacts from "./components/container/Contacts";
import TotalContacts from './components/ui/Contacts';
import AddContact from './components/container/Contacts/AddContact';

import './App.scss';

// Apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});


class App extends React.Component {
  render() {
    
    return (
      <ApolloProvider client={client}>
        <React.Fragment>
          <Nav auth={this.props.auth} />
          <Sidebar />

          <div className="sa-content">
            <div className="main-content container-fluid">

              <div className="row">
                <div className="col-12 col-lg-6 col-xl-3">
                  <TotalContacts />
                </div>
              </div>
              
              <div className="row">
                <div className="col-12 col-lg-6">
                  <Contacts />
                </div>
                <div className="col-12 col-lg-6">
                  <AddContact />
                </div>
              </div>
              
            </div>
          </div>
        </React.Fragment>
      </ApolloProvider>
    );
  }
}

export default App;
