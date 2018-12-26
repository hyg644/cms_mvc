import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon,  } from 'antd';

import {FormattedMessage} from 'react-intl';

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
    onOpenChange = (openKeys,key) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        // debugger
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys: latestOpenKey ? [latestOpenKey] : [] });
            //  console.log('openKeysNow1:'+openKeys)
            // const openKeysNow = openKeys? openKeys:'';
            this.props.handlerSelectedChange(latestOpenKey);
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
            const latestOpenKeyNow = latestOpenKey ? [latestOpenKey] : []
            // console.log('openKeysNow2:'+openKeys)
            // console.log('latestOpenKeyNow2:'+ latestOpenKeyNow)
            this.props.handlerSelectedChange(latestOpenKey);
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
                <SubMenu key="sub1" title={<span><Icon type="hdd" /><FormattedMessage  id="intl.nav.contentManage"  defaultMessage={'内容管理'} /></span>}>
                    <Menu.Item key="sub1-1"><Link to="/dashboard/manageContent/editContent">
                        <Icon type="form" />
                        <FormattedMessage  id="intl.nav.contentEdit"  defaultMessage={'内容编辑'} /></Link>
                    </Menu.Item>
                    <Menu.Item key="sub1-2"><Link to="/dashboard/manageContent/subjectManage">
                        <Icon type="snippets" />
                        <FormattedMessage  id="intl.nav.subjectEdit"  defaultMessage={'专题编辑'} /></Link>
                    </Menu.Item>
                    <Menu.Item key="sub1-3"><Link to="/dashboard/manageContent/columnManage">
                        <Icon type="ordered-list" />
                        <FormattedMessage  id="intl.nav.columnEdit"  defaultMessage={'栏目编辑'} /></Link>
                    </Menu.Item>
                    <Menu.Item key="sub1-4"><Link to="/dashboard/manageContent/commentLibraryManage">
                        <Icon type="book" />
                        <FormattedMessage  id="intl.nav.commentLibraryEdit"  defaultMessage={'评语库编辑'} /></Link>
                    </Menu.Item>
                    <Menu.Item key="sub1-5"><Link to="/userInfo">UserInfo</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="robot" /><FormattedMessage  id="intl.nav.operationManage"  defaultMessage={'运营管理'} /></span>}>
                    <Menu.Item key="sub2-1"><Link to="">
                        <Icon type="windows" />
                        <FormattedMessage  id="intl.nav.columnSlider"  defaultMessage={'栏目幻灯'} /></Link>
                    </Menu.Item>
                    <Menu.Item key="sub2-2"><Link to="">
                        <Icon type="notification" />
                        <FormattedMessage  id="intl.nav.AD.manage"  defaultMessage={'广告管理'} /></Link>
                    </Menu.Item>
                    <Menu.Item key="sub2-3"><Link to="">
                        <Icon type="link" />
                        <FormattedMessage  id="intl.nav.friendlyLink"  defaultMessage={'友情链接'} /></Link>
                    </Menu.Item>
                    <Menu.Item key="sub2-4"><Link to="">
                        <Icon type="tags" />
                        <FormattedMessage  id="intl.nav.tagManage"  defaultMessage={'TAG管理'} /></Link>
                    </Menu.Item>
                    <Menu.Item key="sub2-5"><Link to="">
                        <Icon type="solution" />
                        <FormattedMessage  id="intl.nav.clientUserManage"  defaultMessage={'客户端用户管理'} /></Link>
                    </Menu.Item>
                    <Menu.Item key="sub2-6"><Link to="">
                        <Icon type="video-camera" />
                        <FormattedMessage  id="intl.nav.selfMediaAccountManage"  defaultMessage={'自媒体号管理'} /></Link>
                    </Menu.Item>
                    <Menu.Item key="sub2-7"><Link to="">
                        <Icon type="tablet" />
                        <FormattedMessage  id="intl.nav.versionManage"  defaultMessage={'版本管理'} /></Link>
                    </Menu.Item>
                    <Menu.Item key="sub2-8"><Link to="">
                        <Icon type="code" />
                        <FormattedMessage  id="intl.nav.contentParamConfig"  defaultMessage={'配置内容参数'} /></Link>
                    </Menu.Item>
                    <Menu.Item key="sub2-9"><Link to="">
                        <Icon type="build" />
                        <FormattedMessage  id="intl.nav.contentParamManage"  defaultMessage={'内容参数管理'} /></Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="profile" /><FormattedMessage  id="intl.nav.purviewManage"  defaultMessage={'权限管理'} /></span>}>
                    <Menu.Item key="sub3-1"><Link to="">
                        <Icon type="user" />
                        <FormattedMessage  id="intl.nav.systemUser"  defaultMessage={'系统用户'} /></Link>
                    </Menu.Item>
                    <Menu.Item key="sub3-2"><Link to="">
                        <Icon type="team" />
                        <FormattedMessage  id="intl.nav.departManage"  defaultMessage={'部门管理'} /></Link>
                    </Menu.Item>
                    <Menu.Item key="sub3-3"><Link to="">
                        <Icon type="user-add" />
                        <FormattedMessage  id="intl.nav.roleManage"  defaultMessage={'角色管理'} /></Link>
                    </Menu.Item>
                    <Menu.Item key="sub3-4"><Link to="">
                        <Icon type="usergroup-add" />
                        <FormattedMessage  id="intl.nav.rolePurviewManage"  defaultMessage={'角色权限管理'} /></Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="cluster" /><FormattedMessage  id="intl.nav.systemManage"  defaultMessage={'系统管理'} /></span>}>
                    <ItemGroup key="g1" title={<FormattedMessage  id="intl.nav.systemManage"  defaultMessage={'系统管理'} />}>
                        <Menu.Item key="sub4-g1-1"><Link to="/dashboard/manageSystem/systemManage/siteManage">
                            <Icon type="desktop" />
                            <FormattedMessage  id="intl.nav.siteManage"  defaultMessage={'站点管理'} /></Link>
                        </Menu.Item>
                        <Menu.Item key="sub4-g1-2"><Link to="/dashboard/manageSystem/systemManage/modelManage">
                            <Icon type="layout" />
                            <FormattedMessage  id="intl.nav.modelManage"  defaultMessage={'模型管理'} /></Link>
                        </Menu.Item>
                        <Menu.Item key="sub4-g1-3"><Link to="/dashboard/manageSystem/systemManage/templateManage">
                            <Icon type="file-markdown" />
                            <FormattedMessage  id="intl.nav.templateManage"  defaultMessage={'模板管理'} /></Link>
                        </Menu.Item>
                        <Menu.Item key="sub4-g1-4"><Link to="/dashboard/manageSystem/systemManage/planManage">
                            <Icon type="line-chart" />
                            <FormattedMessage  id="intl.nav.schedule"  defaultMessage={'计划任务'} /></Link>
                        </Menu.Item>
                        <Menu.Item key="sub4-g1-5"><Link to="/dashboard/manageSystem/systemManage/interfaceList">
                            <Icon type="api" />
                            <FormattedMessage  id="intl.nav.interfaceList"  defaultMessage={'接口列表'} /></Link>
                        </Menu.Item>
                        <Menu.Item key="sub4-g1-6"><Link to="/dashboard/manageSystem/systemManage/paramterConfig">
                            <Icon type="tool" />
                            <FormattedMessage  id="intl.nav.paramConfig"  defaultMessage={'参数配置'} /></Link>
                        </Menu.Item>
                    </ItemGroup>
                    <ItemGroup key="g2" title={<FormattedMessage  id="intl.nav.functionMaintenance"  defaultMessage={'功能维护'} />}>
                        <Menu.Item key="sub4-g2-1"><Link to="/dashboard/manageSystem/functoinMaintenance/attachmentManage">
                            <Icon type="paper-clip" />
                            <FormattedMessage  id="intl.nav.attachmentManage"  defaultMessage={'附件管理'} /></Link>
                        </Menu.Item>
                        <Menu.Item key="sub4-g2-2"><Link to="/dashboard/manageSystem/functoinMaintenance/clearCacheManage">
                            <Icon type="delete" />
                            <FormattedMessage  id="intl.nav.cacheCleanup"  defaultMessage={'缓存清理'} /></Link>
                        </Menu.Item>
                    </ItemGroup>
                    <ItemGroup key="g3" title={<FormattedMessage  id="intl.nav.logMonitor"  defaultMessage={'日志监控'} />}>
                        <Menu.Item key="sub4-g3-1"><Link to="/dashboard/manageSystem/logMonitoring/logList">
                            <Icon type="fund" />
                            <FormattedMessage  id="intl.nav.systemMonitor"  defaultMessage={'系统监控'} /></Link>
                        </Menu.Item>
                        <Menu.Item key="sub4-g3-2"><Link to="/dashboard/manageSystem/logMonitoring/systemMonitoring">
                            <Icon type="align-left" />
                            <FormattedMessage  id="intl.nav.logList"  defaultMessage={'日志列表'} /></Link>
                        </Menu.Item>
                    </ItemGroup>
                </SubMenu>
                </Menu>
            </Sider>
      
        )
    }
}