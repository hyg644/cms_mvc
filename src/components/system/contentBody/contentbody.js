import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect, withRouter} from 'react-router-dom';
// import {createBrowserHistory} from 'history'
// import getRouter from 'router/router';

import { Layout, Menu, Breadcrumb, Icon, } from 'antd';
import {renderRoutes} from 'react-router-config';

import BreadcrumbNav from 'components/system/breadcrumb/breadcrumbNav';

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
       
        
        // console.log('this.props:'+JSON.stringify(this.props))
        

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
                <BreadcrumbNav route = {this.props}/>
                
                <Content style={{background: '#fff', padding: 12, margin: 0, minHeight: 280,}}>
                    {renderRoutes(this.state.route.children)}
                    {/* {console.log('route2:'+this.state.route)} */}
                </Content>
            </Layout>
        )
    }
}