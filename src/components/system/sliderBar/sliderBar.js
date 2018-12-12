import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon,  } from 'antd';

const { Sider } = Layout;
const { SubMenu, ItemGroup} = Menu;

export default class SliderBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            theme:'dark',
            openKeys:['sub1'],

            route:props.route
        }  
    }

    //submenu keys of first level
    rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];

    //TODO SubMenu open change
    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
             console.log('openKeysNow1:'+openKeys)
            // const openKeysNow = openKeys? openKeys:'';
            this.props.handlerSelectedChange(this.state.openKeys);
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
            const latestOpenKeyNow = latestOpenKey ? [latestOpenKey] : []
            console.log('openKeysNow2:'+openKeys)
            console.log('latestOpenKeyNow2:'+ latestOpenKeyNow)
            this.props.handlerSelectedChange(this.state.openKeys);
        }

     

        //TOOD 状态提升
       
    }

    //TODO
    componentWillMount(){
        // this.setState({
        //     openKeys:this.props.openKeys?this.props.openKeys:['sub1']
        // });
        
    }



    render(){
        return (
            <Sider width={200} style={{ background: '#fff' }} >
                <Menu
                mode="inline"
                // defaultSelectedKeys={['1']}
                // defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                openKeys={this.props.openKeys}
                onOpenChange={this.onOpenChange}
                >
                <SubMenu key="sub1" title={<span><Icon type="hdd" />内容管理</span>}>
                    <Menu.Item key="sub1-1"><Link to="/dashboard/manageContent/editContent"><Icon type="form" />内容编辑</Link></Menu.Item>
                    <Menu.Item key="sub1-2"><Link to="/dashboard/manageContent/subjectManage"><Icon type="snippets" />专题编辑</Link></Menu.Item>
                    <Menu.Item key="sub1-3"><Link to="/dashboard/manageContent/columnManage"><Icon type="ordered-list" />栏目管理</Link></Menu.Item>
                    <Menu.Item key="sub1-4"><Link to="/contentInput">contentInput</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="robot" />运营管理</span>}>
                    <Menu.Item key="sub2-1"><Icon type="windows" />栏目幻灯</Menu.Item>
                    <Menu.Item key="sub2-2"><Icon type="notification" />广告管理</Menu.Item>
                    <Menu.Item key="sub2-3"><Icon type="link" />友情链接</Menu.Item>
                    <Menu.Item key="sub2-4"><Icon type="tags" />TAG管理</Menu.Item>
                    <Menu.Item key="sub2-5"><Icon type="solution" />客户端用户管理</Menu.Item>
                    <Menu.Item key="sub2-6"><Icon type="video-camera" />自媒体号管理</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="profile" />权限管理</span>}>
                    <Menu.Item key="sub3-1"><Icon type="user" />系统用户</Menu.Item>
                    <Menu.Item key="sub3-2"><Icon type="team" />部门管理</Menu.Item>
                    <Menu.Item key="sub3-3"><Icon type="user-add" />角色管理</Menu.Item>
                    <Menu.Item key="sub3-4"><Icon type="usergroup-add" />系统权限管理</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="cluster" />系统管理</span>}>
                    <ItemGroup key="g1" title='系统管理'>
                        <Menu.Item key="sub4-g1-1"><Icon type="desktop" />站点管理</Menu.Item>
                        <Menu.Item key="sub4-g1-2"><Icon type="layout" />模型管理</Menu.Item>
                        <Menu.Item key="sub4-g1-3"><Icon type="file-markdown" />模板管理</Menu.Item>
                        <Menu.Item key="sub4-g1-4"><Icon type="line-chart" />计划任务</Menu.Item>
                        <Menu.Item key="sub4-g1-5"><Icon type="api" />接口列表</Menu.Item>
                        <Menu.Item key="sub4-g1-6"><Icon type="tool" />参数配置</Menu.Item>
                    </ItemGroup>
                    <ItemGroup key="g2" title='功能维护'>
                        <Menu.Item key="sub4-g2-1"><Icon type="paper-clip" />附件管理</Menu.Item>
                        <Menu.Item key="sub4-g2-2"><Icon type="delete" />缓存清理</Menu.Item>
                    </ItemGroup>
                    <ItemGroup key="g3" title='日志监控'>
                        <Menu.Item key="sub4-g3-1"><Icon type="fund" />系统监控</Menu.Item>
                        <Menu.Item key="sub4-g3-2"><Icon type="align-left" />日志列表</Menu.Item>
                    </ItemGroup>
                </SubMenu>
                </Menu>
            </Sider>
      
        )
    }
}