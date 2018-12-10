import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Bundle from './bundle'

import Login from 'bundle-loader?lazy&name=login!components/login/login';
import Dashboard from 'bundle-loader?lazy&name=home!components/system/dashboard';
import NotFound from 'bundle-loader?lazy&name=NoFound!components/status/notFound';
import Loading from 'bundle-loader?lazy&name=Loading!components/system/loading/loading'


//TODO
// const Loading = function(){
//     return <div>Loading......</div>
// };

const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} />: <Loading />
        }
    </Bundle>
);
 
const getRouterLogin = () => (
    <Switch history={history}>
        <Route exact path="/" component={createComponent(Login)}/>
        <Route path="/login" component={createComponent(Login)}/>
        <Route path="/dashboard" component={createComponent(Dashboard)}/>
        <Route component={createComponent(NotFound)}/>
    </Switch>
);

export default getRouterLogin;
