//TODO 内容管理
import React,{Component} from 'react';

import {renderRoutes} from 'react-router-config';

export default class ManageContent extends Component {
    constructor(props){
        super(props);
        this.state ={
            route: props.route
        }
    }

    render(){
        return (
            <div>
                {console.log('this.props:'+JSON.stringify(this.props))}
                 {renderRoutes(this.state.route.children)}
            </div>
        )}
}