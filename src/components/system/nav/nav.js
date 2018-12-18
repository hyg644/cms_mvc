import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon, Select } from 'antd';
import {post} from 'utils/RequestNormal';

import style from 'style/cmsBase.less';

const Option = Select.Option;

const { Header, Footer, Sider, Content, } = Layout;

export default class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
            theme: 'blue',
            selectedKeys:['sub1'],
            //TODO 要获取默认语言先
            defaultLocale:''
        }
    }
    
    //状态提升，返回选择频道
    selectedChange = (e) => {
        console.log('navKeys:'+this.props)
        this.props.handlerSelectedChange(e.key);
        console.log('e.key:'+e.key)
    }

    //TODO 设置语版本
    setLocaleHandler = (target) =>{
        console.log(target)
        post('http://10.0.41.131:8213/locale',{
            'locale':target      
        })
        .then((res)=>{
            console.log('res.JSON():'+res);
        })
    }

    render(){
        return (
            <Header>
                <div className={style.headFlex}>
                    <div>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={this.props.selectedKeys} onSelect={this.selectedChange} style={{ lineHeight: '64px'}} >
                        <Menu.Item key="1"><Link to="/" >登录</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/dashboard">CMS首页</Link></Menu.Item>
                        <Menu.Item key="sub1"><Link to="/dashboard/manageContent">内容管理</Link></Menu.Item>
                        <Menu.Item key="sub2"><Link to="/dashboard/manageOperation">运营管理</Link></Menu.Item>
                        <Menu.Item key="sub3"><Link to="/dashboard/managePurview">权限管理</Link></Menu.Item>
                        <Menu.Item key="sub4"><Link to="/dashboard/manageSystem">系统管理</Link></Menu.Item>
                    </Menu>
                    </div>

                    <Select defaultValue="zh_CN" style={{ width: 100, fontSize:'12px', textAlign:'center' }} onChange={this.setLocaleHandler} size="small">
                        <Option value="en_US">English</Option>
                        <Option value="zh_CN">中文-简体</Option>
                    </Select>
                </div>
            </Header>        
        )
    }
}
