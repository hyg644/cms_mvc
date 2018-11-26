import React from 'react';
import { Router, Route,browserHistory } from 'react-router';
import App from './App';
import Login from './views/login';

function RouterConfig(){
    return(
        <Router history={ browserHistory }>
            <Route path="/" component={App} rexact />
            <Route path="/App" component={App} rexact />
            <Route path="/Login" component={Login} rexact>
                {/* <Route path="Login/:id" component={Login} /> */}
            </Route>
            
        </Router>
    )
}
 
export default  RouterConfig 
