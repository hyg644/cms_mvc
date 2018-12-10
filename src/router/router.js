import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Bundle from './bundle'

import Login from 'bundle-loader?lazy&name=login!components/login/login';
import Dashboard from 'bundle-loader?lazy&name=dashboard!components/system/dashboard';
import ContentInput from 'bundle-loader?lazy&name=contentInput!components/template/contentInput';
import Counter from 'bundle-loader?lazy&name=counter!components/template/counter';
import UserInfo from 'bundle-loader?lazy&name=userInfo!components/template/userInfo';
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
 
const getRouter = () => (
    <Switch history={history}>
        {/* <Route exact path="/" component={createComponent(Dashboard)}/> */}
        <Route path="/dashboard" component={createComponent(Dashboard)}/>
        <Route path="/login" component={createComponent(Login)}/>
        <Route path="/contentInput" component={createComponent(ContentInput)}/>
        <Route path="/counter" component={createComponent(Counter)}/>
        <Route path="/userInfo" component={createComponent(UserInfo)}/>
        <Route component={createComponent(NotFound)}/>
    </Switch>
);


export default getRouter;
