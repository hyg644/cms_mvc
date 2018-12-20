import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
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
            defaultLocaleValue:''
        }
    }
    
    //TODO nav联动 状态提升，返回选择频道
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
            console.log('res.JSON():'+JSON.stringify(res));
            //TODO setting localStorage locale with 'res' return result 
            localStorage.locale = res.locale;
            //TODO update pages
            window.location.reload()
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
                        <Menu.Item key="sub1"><Link to="/dashboard/manageContent"><FormattedMessage  id="intl.nav.contentManage"  defaultMessage={'内容管理'} /></Link></Menu.Item>
                        <Menu.Item key="sub2"><Link to="/dashboard/manageOperation"><FormattedMessage  id="intl.nav.operationManage"  defaultMessage={'运营管理'} /></Link></Menu.Item>
                        <Menu.Item key="sub3"><Link to="/dashboard/managePurview"><FormattedMessage  id="intl.nav.purviewManage"  defaultMessage={'权限管理'} /></Link></Menu.Item>
                        <Menu.Item key="sub4"><Link to="/dashboard/manageSystem"><FormattedMessage  id="intl.nav.systemManage"  defaultMessage={'系统管理'} /></Link></Menu.Item>
                    </Menu>
                    </div>
                    {console.log('this.props.locale:'+this.props.locale)}
                    <Select defaultValue={this.props.locale} style={{ width: 100, fontSize:'12px', textAlign:'center' }} onChange={this.setLocaleHandler} size="small">
                        <Option value="en_US">English</Option>
                        <Option value="zh_CN">中文-简体</Option>
                    </Select>
                </div>
            </Header>        
        )
    }
}
