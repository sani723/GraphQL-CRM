import * as React from 'react';
import { Redirect, Router, Route, Switch } from 'react-router-dom';

import Nav from '../../ui/Nav';
import Sidebar from '../../ui/Sidebar';

import App from '../../../App';
import Campaigns from '../../container/Campaigns';
import Profile from '../../container/Profile';
import UsersList from '../../container/Contacts/ContactsList';
import NotFound from '../../ui/NotFound';

import Callback from '../../container/Auth/Callback';
import Auth from '../../container/Auth';
import history from '../../container/Auth/history';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}


const Routes = () => (
    <Router history={history}>
        <React.Fragment>
            <Nav auth={auth} />
            <Sidebar />
            <Switch>
                <Route exact path="/" render={(props) => <App auth={auth} {...props} />} />
                <Route path="/users" render={(props) => <UsersList auth={auth} {...props} />} />
                <Route path="/campaigns" render={(props) => (
                    !auth.isAuthenticated() ? (
                        <Redirect to="/" />
                    ) : (
                        <Campaigns auth={auth} {...props} />
                    ) 
                )} />
                <Route path="/profile" render={(props) => (
                    !auth.isAuthenticated() ? (
                        <Redirect to="/" />
                    ) : (
                        <Profile auth={auth} {...props} />
                    ) 
                )} />
                <Route path="/callback" render={(props) => {
                    handleAuthentication(props);
                    return <Callback {...props} /> 
                }}/>
                <Route component={NotFound} /> 
            </Switch>
        </React.Fragment>    
    </Router>
);


export default Routes;