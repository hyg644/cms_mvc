//TODO 站点管理
import React,{Component} from 'react';
import { Table,Button } from 'antd';
import siteTableHeader from './siteTableHeader'
import {connect} from 'react-redux';
import {getSiteInfo} from '../../../../../redux/actions/siteManage'
class SiteManage extends Component {
    state={
        selectedRowKeys:[],
    }
    onSelectChange=(selectedRowKeys)=>{
        console.log('selectedRowKeys changed:',selectedRowKeys);
        this.setState({selectedRowKeys})
    }
    componentDidMount(){
        this.props.getSiteInfo()
    }
    
    render(){
        const {siteInfo} =this.props.siteInfo;
        const {selectedRowKeys}=this.state;
        const rowSelection={
            selectedRowKeys,
            onChange:this.onSelectChange
        }
        // {console.log(this.props.siteInfo)}
        return (
            <div>
                <Button style={{marginBottom:10}}>添加</Button>
                <Table rowKey={siteTableHeader.no} rowSelection={rowSelection} columns={siteTableHeader} dataSource={siteInfo}  ></Table>
            </div>
    )}
}
// const mapStateToProps =(state)=>{
//     // console.log(state)
// }
// const mapDispatchToprops=(dispatch)=>{
//     console.log('1')
//     return {
       
//     }
// }

// export default connect(mapStateToProps,mapDispatchToprops)(SiteManage)
export default connect((state)=>({
    siteInfo:state.siteInfo}),
    {getSiteInfo})(SiteManage)