import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon, } from 'antd';


const { Header, Footer, Sider, Content, } = Layout;

export default class NavBase extends Component {
    state = {
        theme: 'blue'
    }
    render(){
        return (
            <Header className="heade" >
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px'}} >
                    <Menu.Item key="1"><Link to="/" >NEW CMS LOGO</Link></Menu.Item>
                </Menu>
            </Header>        
        )
    }
}