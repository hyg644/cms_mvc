//TODO 站点管理
import React,{Component} from 'react';
import { Table,Button,Modal,Divider, Icon} from 'antd';
import siteTableHeader from './siteTableHeader'
import {connect} from 'react-redux';
import {getSiteInfo} from '../../../../../redux/actions/siteManage'
import style from 'style/cmsBase.less';
import {FormattedMessage} from 'react-intl';
class SiteManage extends Component {
    state={
        selectedRowKeys:[], //全选Array
        visible:false,//定义模态框默认隐藏
        title:'确认', //模态框标题
        ModalText:'确定要删除改站点么?' //模态框内容
    }
    onSelectChange=(selectedRowKeys)=>{ 
        console.log('selectedRowKeys changed:',selectedRowKeys);
        this.setState({selectedRowKeys})
    }
    componentDidMount(){ //挂载时加载redux定义好的方法
        this.props.getSiteInfo()
    }
    handleOk=()=>{
        this.setState({visible:false})
        console.log('您点击了确认')
    }
    handleCancel=()=>{
        this.setState({visible:false})
    }
    delData=()=>{
        this.setState({ visible:true})
    }
    getID=(e)=>{
        console.log(e)
    }
    onChange=(pagination,filters,sorter)=>{
        console.log('params', pagination, filters, sorter);
    }
    render(){
        const {siteInfo} =this.props.siteInfo;
        const {selectedRowKeys,visible,title,ModalText}=this.state;
        const rowSelection={
            selectedRowKeys,
            onChange:this.onSelectChange
        }

        siteTableHeader[siteTableHeader.length-1].render = (text,record) =>{
            return (
            // <div> 
            //     <Button style={{marginRight:20}} 
            //         type="primary"  onClick={()=> this.getID(record.title)} 
            //     >当前站点</Button> 
            //     <Button style={{marginRight:20}} 
            //         type="primary"  onClick={()=> this.getID(record.title)}
            //     >编辑</Button>
            //     <Button
            //         type="dashed"  onClick={()=> this.delData(record.no)}
            //     >删除</Button>
            // </div>
            <span>
                <a href="javascript:;" color="magenta">
                    <Icon type="snippets" />
                    &nbsp;
                    <FormattedMessage id="intl.site" defaultMessage={'当前站点'}  />
                </a>
                <Divider type="vertical"/>
                <a href="javascript:;" color="magenta">
                    <Icon type="edit" />
                    &nbsp;
                    <FormattedMessage id="intl.edit" defaultMessage={'编辑'}  />
                </a>
                <Divider type="vertical"/>
                <a href="javascript:;" color="magenta">
                    <Icon type="delete" />
                    &nbsp;
                    <FormattedMessage id="intl.delete" defaultMessage={'删除'}  />
                </a>
            </span>
            )
        }
        return (
            <div>
                <Button style={{marginBottom:10}}>
                    <FormattedMessage id="intl.add" defaultMessage={'新增站点'}/>
                </Button>
                <Button style={{marginBottom:10,marginLeft:10}}>
                    <FormattedMessage id="intl.deleteBatch" defaultMessage={'批量删除'}/>
                </Button>
                <Table   rowKey={siteTableHeader.no} rowSelection={rowSelection} columns={siteTableHeader} dataSource={siteInfo} onChange={this.onChange}  ></Table>
                <Modal 
                    title={title}
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                <p>{ModalText}</p>
                </Modal>
            </div>
    )}
}

// const mapDispatchToprops=(dispatch)=>{
//     console.log('1')
//     return {
       
//     }
// }

// export default connect(mapStateToProps,mapDispatchToprops)(SiteManage)
export default connect((state)=>({
    siteInfo:state.siteInfo}),
    {getSiteInfo})(SiteManage)