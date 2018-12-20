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

    //TODO nav联动 桩体提升函数
    onHandlerSelectedChange = (openKeys) =>{
        console.log('dashboardKey:'+ openKeys)
        this.setState({
            openKeys: openKeys ? [openKeys] : []
        })
    }

    // const { locale, isLoading } = this.props.locale;

    // switchLocale = (localeType) =>{
    // }


    //TODO 获取语言版本
    componentWillMount = () =>{
     
        // debugger
        // let localStorageLanuage = '';
        if(!localStorage.locale){
            localStorage.locale = 'en_US';
        }

        switch(localStorage.locale){
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

        // console.log('this.state:')
        // console.log(this.state)
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
                    {/* <Button onClick = {()=> this.props.getLocale()}>发起请求</Button> */}
                        <Nav handlerSelectedChange={this.onHandlerSelectedChange} locale={this.state.localeLanuage}/>
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