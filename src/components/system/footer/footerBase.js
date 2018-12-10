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
            <Footer className="heade" style={{textAlign:'center', color:'grey', fontSize:'12px'}}>
                <div> &copy; adPanshi.com 2004-2018 </div>
                <Link to="/" >NEW CMS LOGO</Link>
            </Footer>        
        )
    }
}