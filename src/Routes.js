import React from  'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Users from './Pages/Users';

const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route extract path='/Users/name' component={Users} />
        </Switch>  
    </BrowserRouter>
)

export default Routes;