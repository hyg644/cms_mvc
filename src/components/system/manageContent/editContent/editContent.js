//TODO 内容编辑管理
import React,{Component} from 'react';
import {Layout} from 'antd';
import TreeList from  './treeList';
import EditContentBody from  './editContentBody';
import style from 'style/cmsBase.css';

const {Sider} = Layout
 
export default class EditContent extends Component {
    // constructor(props){

    // }

    render(){
        return (
            <Layout style={{'background':'#fff'}}>
                <Sider theme='light'>
                    <TreeList />
                </Sider>
                <Layout>
                    <EditContentBody/>
                </Layout>
            </Layout>
        )}
}