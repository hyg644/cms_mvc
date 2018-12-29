//TODO 内容编辑管理
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Pagination, Table, Divider, Tag, Icon, Button, Modal, Menu, Dropdown, message} from 'antd';
import {FormattedMessage, injectIntl, intlShape, FormattedDate, FormattedTime } from 'react-intl';

import style from 'style/cmsBase.less';
import Loading from 'components/system/loading/loading';

import {getEditContentList} from 'reduxLib/actions/editContentList';

const confirm = Modal.confirm;
//TODO colums
const columns = [
        {
            title:'NO.',
            align:'center',
            className:'style.colStyle',
            dataIndex:'id',
            key:'id',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.id - b.id,
        },{
            title:<FormattedMessage  id="intl.title"  defaultMessage={'标题'} />,
            align:'center',
            dataIndex:'title',
            key:'title',
            // filterDropdown:(dataIndex)=>(console.log(dataIndex)),
            render:text=><a href="javascript:;">{text}</a>
        },{
            title:<FormattedMessage  id="intl.browseVolume"  defaultMessage={'浏览量'} />,
            align:'center',
            dataIndex:'browse',
            key:'browse',
            sorter: (a, b) => a.browse - b.browse,
        },{
            title:<FormattedMessage  id="intl.releaseTime"  defaultMessage={'发表时间'} />,
            align:'center',
            dataIndex:'releaseTime',
            key:'releaseTime',
            sorter: (a, b) => {
                let aReleaseTime = new Date(a.releaseTime);
                let bReleaseTime = new Date(b.releaseTime);
                return aReleaseTime.getTime()-bReleaseTime.getTime()
            },
            render:releaseTime=>{ 
                    let dateFormate = (<FormattedDate value={releaseTime} />) ;
                    // let timeFormate = (<FormattedTime value={releaseTime} />) ; 
                    // console.log((dateFormate))
                    return dateFormate; 
                }
        },{
            title:<FormattedMessage  id="intl.recommend"  defaultMessage={'推荐'} />,
            align:'center',
            // dataIndex:'recommend',
            key:'recommend',
            filters:[
                {
                    text:<FormattedMessage  id="intl.yes"  defaultMessage={'是'} />,
                    value: 1
                },{
                    text:<FormattedMessage  id="intl.no"  defaultMessage={'否'} />,
                    value: 0
                }
            ],
            filterMultiple: false,
            onFilter: (value, record) => record.recommend == value,
            render:(data,record)=>(
                data.recommend?<span className={style.textGreen}><FormattedMessage  id="intl.yes"  defaultMessage={'是'} /></span>
                    :<span className={style.textOrange}><FormattedMessage  id="intl.no"  defaultMessage={'否'} /></span>
            )
        },{
            title:<FormattedMessage  id="intl.status"  defaultMessage={'状态'} />,
            align:'center',
            // dataIndex:'status',
            key:'status',
            filters:[
                {
                    text:<FormattedMessage  id="intl.release"  defaultMessage={'发表'} />,
                    value: 1
                },{
                    text:<FormattedMessage  id="intl.draft"  defaultMessage={'草稿'} />,
                    value: 0
                }
            ],
            filterMultiple: false,
            onFilter: (value, record) => record.recommend == value,
            render:(data,record)=>(
                data.recommend?<span className={style.textGreen}><FormattedMessage  id="intl.release"  defaultMessage={'发表'} /></span>
                    :<span className={style.textOrange}><FormattedMessage  id="intl.draft"  defaultMessage={'草稿'} /></span>
            )
        },{
            title:<FormattedMessage  id="intl.operation"  defaultMessage={'操作'} />,
            align:'center',
            key:'operation',
            render: (text,record) => (
                <span>
                    <a href="javascript:;" color="magenta">
                        <Icon type="edit" />
                        &nbsp;
                        <FormattedMessage  id="intl.edit"  defaultMessage={'编辑'} />
                    </a>
                    <Divider type="vertical"></Divider>
                    <a href="javascript:;" color="magenta">
                        <Icon type="delete" />
                        &nbsp;
                        <FormattedMessage  id="intl.delete"  defaultMessage={'删除'} />
                    </a>
                    <Divider type="vertical"></Divider>
                    <a href="javascript:;" color="magenta">
                        <Icon type="snippets" />
                        &nbsp;
                        <FormattedMessage  id="intl.preview"  defaultMessage={'预览'} />
                    </a>
                    <Divider type="vertical"></Divider>
                    <a href="javascript:;" color="magenta">
                        <Icon type="fund" />
                        &nbsp;
                        <FormattedMessage  id="intl.data"  defaultMessage={'数据'} />
                    </a>
                </span>
            )
        }
    ];

class EditContentBody extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedRowKeys: [],
            loading:false
        }
    }

    //TODO antd 的massage和modal 会对intl组件化调用，导致上下文丢失，intl使用API调用
    static propTypes = {
        intl: intlShape.isRequired
    }

    //TODO set param rowSelection
    rowSelection = {
        onChange:(selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            this.setState({
                selectedRowKeys:selectedRowKeys
            });
        },
        getCheckboxProps:record => ({
            // disable: record.name === 'Disabled User',
            // name: record.name,
        }),
        selections:[],

    };

    

    //TODO onShowSizeChange
    onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
    };
    
   

    //TODO onHandlerChange
    onHandlerBatchOperation = (data) =>{
        console.log('onHandleChange target:'+ this.state.selectedRowKeys.length);
        //TODO intl 以 API 方式调用
        const { intl: { formatMessage } } = this.props;
        const chooseOneMsg = formatMessage({id:'intl.msg.chooseOne', defaultMessage:'至少选择一项！'});

        //TODO 至少选择一个进行操作
        if(this.state.selectedRowKeys.length <= 0){
            return  message.info(chooseOneMsg)
        }

        //
        const confirmTitle = formatMessage({id:'intl.confirm.title.delete', defaultMessage:'确认要删除吗？'});
        let confirmContent = formatMessage({id:'intl.confirm.content.delete.batch', defaultMessage:'确认要删除当前的 {num} 条记录吗？'}, {num:this.state.selectedRowKeys.length});

        //debugger
        // message.info(`Click on item ${key}`);
    
    
      

        if(data.key==='delete'){
            confirm({
                title: confirmTitle,
                content: confirmContent,
                onOk(e){
                    console.log(e)
                },
                onCancel(){}
            })
        }else if(data.key==='refresh'){
            //TODO
        }
    }

    //TODO set item menu
    menu = (
        <Menu onClick={this.onHandlerBatchOperation}>
            <Menu.Item key='delete'><Icon type="delete" /><FormattedMessage id="intl.delete"   defaultMessage={'删除'}/></Menu.Item>
            <Menu.Item key='refresh'><Icon type="reload" /><FormattedMessage id="intl.refresh"   defaultMessage={'刷新'}/></Menu.Item>
        </Menu>
    );

    //TODO componentWillMount
    componentWillMount = (e) => {
        this.props.getEditContentList();
    }


    render(){
        const dataSource = this.props.editContentList.editContentList;
        
        // const title = formatMessage({id:'intl.delete'});
        // const content = formatMessage({id:'intl.batchOperation'});

        return (
            <div>
                <div className={style.tableTopBar}>
                    
                    <Dropdown overlay={this.menu}>
                        <Button><Icon type='bars' /><FormattedMessage id="intl.batchOperation"   defaultMessage={'批量操作'}/></Button>
                    </Dropdown>
                    &nbsp;
                    <Button  type="primary"><Icon type='plus' /><FormattedMessage id="intl.add"   defaultMessage={'添加'}/></Button>
                    
                </div>

                <Table columns={columns} dataSource={dataSource} rowSelection={this.rowSelection}  size="middle"/>
            </div>
        )
    }
}

//TODO injectIntl的说明
//antd 的massage和modal 会对intl组件化调用，导致上下文丢失，intl使用API调用
export default injectIntl(connect((state)=>({editContentList:state.editContentList}),{getEditContentList})(EditContentBody));
