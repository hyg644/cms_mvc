import React, {Component} from 'react';
import {getRouter} from 'router/router';
import {renderRoutes } from 'react-router-config';
import {Layout, Menu, LocaleProvider} from 'antd';

//TODO 本地化
import {IntlProvider, addLocaleData, FormattedMessage} from 'react-intl';
//TODO 载入antd语言包
import antd_zh_CN from 'antd/lib/locale-provider/zh_CN';
import antd_en_US from 'antd/lib/locale-provider/en_US';
//TODO 载入自定义语言配置
import intl_zh_CN from 'locales/zh-CN';
import intl_en_US from 'locales/en-US';
//TODO 载入 react-intel 语言包
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';

import Dashboard from 'components/system/dashboard';
import WrappedNormalLoginForm from 'components/login/login';
//TODO
import Request, {get} from 'utils/Request';
//TODO
addLocaleData([...en, ...zh]);



export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            LocaleLanuage:'zh_CN',
            antdLocale:antd_zh_CN,
            intlLocale:intl_zh_CN,
            intlLocaleLanuage:'zh',
        }
    }

    //TODO 获取语言版本
    componentWillMount = () =>{
        
        get('http://10.0.41.131:8213/locale')
        .then((res)=>{
        
            switch(res.locale){
                case 'en_US':
                    this.setState({
                        LocaleLanuage:'en_US',
                        antdLocale:antd_en_US,
                        intlLocale:intl_en_US,
                        intlLocaleLanuage:'en',
                    })
                    break;
                case 'zh_CN':
                    this.setState({
                        LocaleLanuage:'zh_CN',
                        antdLocale:antd_zh_CN,
                        intlLocaleintl_zh_CN,
                        intlLocaleLanuage:'zh',
                    })
                    break;
                default:
                    this.setState({
                        LocaleLanuage:'zh_CN',
                        antdLocale:antd_zh_CN,
                        intlLocale:intl_zh_CN,
                        intlLocaleLanuage:'zh',
                    })
                    break;
            }
            console.log('JSON.stringify(res):'+JSON.stringify(res));
        })
        .catch((error)=>{
            //TODO
            console.log(error)
        })

        
    }

    render(){
        return (
            <IntlProvider
                locale={this.state.intlLocaleLanuage}
                messages={this.state.intlLocale}
                // formats={appLocale.formats}
            >
                <LocaleProvider locale={this.state.antdLocale}>
                    <Layout>
                    {console.log('this.state.intlLocaleLanuage:'+ this.state.intlLocaleLanuage)}
                        { renderRoutes(getRouter) }
                    </Layout>
                </LocaleProvider>
            </IntlProvider>
        )
    };
}
