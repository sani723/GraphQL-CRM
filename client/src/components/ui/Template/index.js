import * as React from 'react';
import AppNav from '../Nav';
import AppSidebar from '../Sidebar';
import Routes from '../Routes';

import Auth from '../../container/Auth';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

const Template = () => (
    <React.Fragment>
        <AppNav auth={auth} />
        <AppSidebar />
        <Routes />
    </React.Fragment>      
);

export default Template;