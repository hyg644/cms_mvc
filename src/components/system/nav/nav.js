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
                    <Menu.Item key="3"><Link to="/dashboard/manageContent">内容管理</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/dashboard/manageOperation">运营管理</Link></Menu.Item>
                    <Menu.Item key="5"><Link to="/dashboard/managePurview">权限管理</Link></Menu.Item>
                    <Menu.Item key="6"><Link to="/dashboard/manageSystem">系统管理</Link></Menu.Item>
                </Menu>
            </Header>        
        )
    }
}

