import React, {Component} from 'react';

import Dashboard from 'components/system/dashboard';
import WrappedNormalLoginForm from 'components/login/login';
import Request, {Post} from 'utils/Request';

import {getRouter} from 'router/router';
import {renderRoutes } from 'react-router-config';

import {Layout, Menu,} from 'antd';

export default class App extends Component {
    
    state = {
        username:'',
        password:'',
        token:'',
    }

    //TODO 是否登录
    componentWillMount(){
        let tokenSession = sessionStorage.getItem('access-token');
        this.setState({
            token: tokenSession
        })


        if(this.state.token==null){
            //location.replace('/login');
        }
    }
    
    render(){
        return (
            <Layout>
                {/* <WrappedNormalLoginForm  token={this.state.token}/> */}
                {/* <Dashboard /> */}
                { renderRoutes(getRouter) }
            </Layout>
        )
    };
}
