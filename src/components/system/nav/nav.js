import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon, } from 'antd';


const { Header, Footer, Sider, Content, } = Layout;

export default class Nav extends Component {
    state = {
        theme: 'blue'
    }
    render(){
        return (
            <Header className="heade" >
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px'}} >
                    <Menu.Item key="1"><Link to="/" >登录</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/dashboard">CMS首页</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/contentInput">contentInput</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/counter">counter</Link></Menu.Item>
                    <Menu.Item key="5"><Link to="/userInfo">userInfo</Link></Menu.Item>
                </Menu>
            </Header>        
        )
    }
}

