//TODO 依赖
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Layout, LocaleProvider, Button} from 'antd';

//TODO 载入antd语言包
import antd_zh_CN from 'antd/lib/locale-provider/zh_CN';
import antd_en_US from 'antd/lib/locale-provider/en_US';
//TODO 载入自定义语言配置
import intl_zh_CN from 'locales/zh-CN';
import intl_en_US from 'locales/en-US';
//TODO 载入 react-intel依赖
import {IntlProvider, addLocaleData} from 'react-intl';
//TODO 载入 react-intel 语言包
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
//TODO 语言包注入react-intl
addLocaleData([...en, ...zh]);

//TODO 组件
import Nav from 'components/system/nav/nav';
import SliderBar from 'components/system/sliderBar/sliderBar';
import ContentBody from 'components/system/contentBody/contentBody';
import FooterBase from 'components/system/footer/footerBase'

import {getLocaleSuccess,getLocale} from '../../redux/actions/locale';

//TODO utils
// import Request, {get} from 'utils/Request';


class Dashboard extends Component {
    //
    constructor(props) {
        super(props);
        this.state = {
            count : 0,
            route: props.route,
            openKeys:['sub1'],
            //
            localeLanuage:'en_US',
            antdLocale:antd_en_US,
            intlLocale:intl_en_US,
            intlLocaleLanuage:'en',
        }
    }

    //TODO nav联动 状态提升函数
    onHandlerSelectedChange = (openKeys) =>{
        // console.log('dashboardKey:'+ openKeys)
        this.setState({
            openKeys: openKeys ? [openKeys] : []
        })
    }

    //TODO 重置语言 状态提升函数
    onHandlerSetLocale = (locale) =>{
        //重置语言包
        this.handlerSwitchLocale(localStorage.locale);
    }
    
    //TODO switch locale fun
    handlerSwitchLocale = (localeType) =>{
        // console.log('localeType:'+localeType)
        switch(localeType){
            case 'en_US':
                this.setState({
                    localeLanuage:'en_US',
                    antdLocale:antd_en_US,
                    intlLocale:intl_en_US,
                    intlLocaleLanuage:'en',
                })
                break;
            case 'zh_CN':
                this.setState({
                    localeLanuage:'zh_CN',
                    antdLocale:antd_zh_CN,
                    intlLocale:intl_zh_CN,
                    intlLocaleLanuage:'zh',
                })
                break;
            default:
                this.setState({
                    localeLanuage:'en_US',
                    antdLocale:antd_en_US,
                    intlLocale:intl_en_US,
                    intlLocaleLanuage:'en',
                })
                break;
        }
    }


    //TODO 获取语言版本
    componentWillMount = () =>{
        //TODO if localStorage.locale is empty, locale will be created
        if(!localStorage.locale){
            localStorage.locale = 'en_US';
        }
        //TODO 切换语言包
        this.handlerSwitchLocale(localStorage.locale);
        
    }

    render() {
        return (
            <IntlProvider
                locale={this.state.intlLocaleLanuage}
                messages={this.state.intlLocale}
                // formats={appLocale.formats}
            >
                <LocaleProvider locale={this.state.antdLocale}>
                    <Layout>
                    {/* {console.log('this.state.openKeys:'+this.state.openKeys)} */}
                        <Nav handlerSelectedChange={this.onHandlerSelectedChange}  
                            selectedKeys={this.state.openKeys} 
                            // locale={{'locale':this.state.localeLanuage}} 
                            handlerSetLocale={this.onHandlerSetLocale} />
                        <Layout>
                            <SliderBar route={this.props.route}  handlerSelectedChange={this.onHandlerSelectedChange}  openKeys = {this.state.openKeys}/> 
                            <ContentBody route={this.props.route} />
                        </Layout>
                        <FooterBase/>
                    </Layout>
                </LocaleProvider>
            </IntlProvider>
        )
    }
};

export default connect((state)=>({locale:state.locale}),{getLocale})(Dashboard);