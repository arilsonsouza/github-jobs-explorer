import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeRoute from './HomeRoute';
import JobRoute from './JobRoute';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={HomeRoute}/>
        <Route path='/jobs/:id' component={JobRoute}/>
    </Switch>
);

export default Routes;