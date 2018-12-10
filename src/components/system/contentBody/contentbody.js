import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import {createBrowserHistory} from 'history'
import getRouter from 'router/router';
import { Layout, Menu, Breadcrumb, Icon, } from 'antd';

import Request,{Post} from 'utils/Request';

const { Content } = Layout;



export default class ContentBody extends Component {
    constructor(props){
        super(props);
        this.state= {
            contentBodyList:{}
        };  
    }

    componentWillMount(){
        //TODO 用户登录请求
        //let APIUrl = '/api/contentBody';
        let apiUrl = '';

        fetch(apiUrl)
        .then(res=>res.json())
        .then(
            res=>{
                this.setState({
                    contentBodyList:res
                });
                //this.props.history.push('/login')

                // if(res.name=='韩平') {
                //     //this.props.push.history('/login')
                //     //location.replace("/login")
                // }else{
                //     //location.replace("/login");
                // }
                
            }
        )
    }

    render(){
        return (
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280,}}>
                    {getRouter() }
                </Content>
            </Layout>
        )
    }
}

