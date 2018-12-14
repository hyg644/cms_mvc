//TODO 系统管理
import React,{Component} from 'react';
import {renderRoutes} from 'react-router-config';

export default class ManageSystem extends Component {
    constructor(props){
        super(props);
        this.state={
            route:props.route
        }
    }
    render(){
        return (
            <div>
               
                {renderRoutes(this.state.route.children)}
            </div>
        )}
}