import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../../../App';
import NotFound from '../../ui/NotFound';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} /> 
        </Switch>
    </Router>
);


export default Routes;