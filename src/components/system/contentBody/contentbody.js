import React,{Component} from 'react';
// import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
// import {createBrowserHistory} from 'history'
// import getRouter from 'router/router';

import { Layout, Menu, Breadcrumb, Icon, } from 'antd';
import {renderRoutes} from 'react-router-config';

import Request,{Post} from 'utils/Request';

// import style from 'style/cmsBase.css'

const { Content } = Layout;



export default class ContentBody extends Component {
    constructor(props){
        super(props);
        this.state= {
            contentBodyList:{},
            route: props.route
        };  
    }

    componentWillMount(){
        //TODO 用户登录请求
        //let APIUrl = '/api/contentBody';
        let apiUrl = '';

        // fetch(apiUrl)
        // .then(res=>res.json())
        // .then(
        //     res=>{
        //         this.setState({
        //             contentBodyList:res
        //         });
        //         //this.props.history.push('/login')

        //         // if(res.name=='韩平') {
        //         //     //this.props.push.history('/login')
        //         //     //location.replace("/login")
        //         // }else{
        //         //     //location.replace("/login");
        //         // }
                
        //     }
        // )
    }

    render(){
        return (
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item>ContentManage</Breadcrumb.Item>
                    <Breadcrumb.Item>ContentList</Breadcrumb.Item>
                </Breadcrumb>
                
                <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280,}}>
                    {/* {getRouterLogin() } */}x
                    {renderRoutes(this.state.route.children)}
                    {/* {console.log('route2:'+JSON.stringify(this.state.route.children))} */}
                </Content>
            </Layout>
        )
    }
}

