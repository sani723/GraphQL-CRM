import * as React from 'react';
import { Redirect, Router, Route, Switch } from 'react-router-dom';

import App from '../../../App';
import Campaigns from '../../container/Campaigns';
import Profile from '../../container/Profile';
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
        <Switch>
            <Route exact path="/" render={(props) => <App auth={auth} {...props} />} />
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
    </Router>
);


export default Routes;