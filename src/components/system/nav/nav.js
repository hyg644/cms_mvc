import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon, } from 'antd';


const { Header, Footer, Sider, Content, } = Layout;

export default class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
            theme: 'blue',
            selectedKeys:['sub1']
        }
    }
    
    //状态提升，返回选择频道
    selectedChange = (e) => {
        console.log('navKeys:'+this.props)
        this.props.handlerSelectedChange(e.key);
        console.log('e.key:'+e.key)
    }

    render(){
        return (
            <Header className="heade" >
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={this.props.selectedKeys} onSelect={this.selectedChange} style={{ lineHeight: '64px'}} >
                    <Menu.Item key="1"><Link to="/" >登录</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/dashboard">CMS首页</Link></Menu.Item>
                    <Menu.Item key="sub1"><Link to="/dashboard/manageContent">内容管理</Link></Menu.Item>
                    <Menu.Item key="sub2"><Link to="/dashboard/manageOperation">运营管理</Link></Menu.Item>
                    <Menu.Item key="sub3"><Link to="/dashboard/managePurview">权限管理</Link></Menu.Item>
                    <Menu.Item key="sub4"><Link to="/dashboard/manageSystem">系统管理</Link></Menu.Item>
                </Menu>
            </Header>        
        )
    }
}

