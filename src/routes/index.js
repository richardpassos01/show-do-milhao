import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './../components/Home/Home'; 
import Wrong from './../components/Wrong/Wrong';
import Winner from './../components/Winner/Winner';
import Dashboard from '../components/Dashboard/Dashboard';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/dashboard' exact component={Dashboard} />
            <Route path='/wrong-response' component={Wrong} />
            <Route path='/winner' component={Winner} />
        </Switch>
    )
};

export default Routes;