//TODO 内容编辑管理
import React,{Component} from 'react';
import {Layout, Row, Col} from 'antd';
import EditContentTree from  './editContentTree';
import EditContentBody from  './editContentBody';
import style from 'style/cmsBase.less';

const {Sider} = Layout
 
export default class EditContent extends Component {
    // constructor(props){

    // }

    render(){
        return (
            <div className={style.fixedBg}>
                <Row>
                    <Col span={5}  >
                        <Sider theme='light'>
                            <EditContentTree />
                        </Sider>
                    </Col>
                    <Col span={19} >
                        <EditContentBody/>
                    </Col>
                </Row>  
            </div>
        )}
}