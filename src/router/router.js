import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Bundle from './Bundle'

import Home from 'bundle-loader?lazy&name=home!pages/home';
import Page1 from 'bundle-loader?lazy&name=page1!pages/page1';
import Counter from 'bundle-loader?lazy&name=counter!pages/counter/counter';
import UserInfo from 'bundle-loader?lazy&name=UserInfo!pages/UserInfo/UserInfo'
import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound'
import Loading from '../components/Loading/Loading'
const createComponent=(component) => (props) =>(
    <Bundle load={component}>
    {
         (Component) => Component ? <Component {...props} /> : <Loading/>
    }
    </Bundle>
)
const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">Page1</Link></li>
                <li><Link to='/Counter'>counter</Link></li>
                <li><Link to="/UserInfo">UserInfo</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={createComponent(Home)}/>
                <Route path="/page1" component={createComponent(Page1)}/>
                <Route path="/Counter" component={createComponent(Counter)}/>
                <Route path='/UserInfo' component={createComponent(UserInfo)}/>
                <Route component={createComponent(NotFound)}/>
            </Switch>
        </div>
    </Router>
);

export default getRouter;