//TODO 依赖
import React, {Component} from 'react';
import {getRouter} from 'router/router';
import {renderRoutes } from 'react-router-config';

/**
 * 务必保证 入口文件清洁，从而保证打包出的入口文件体积小
 **/

export default class App extends Component {
    render(){
        return (
            <div>
                { renderRoutes(getRouter) }
            </div>
        )
    };
}
