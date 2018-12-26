//TODO 内容编辑管理
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Pagination, Table, Divider, Tag, Icon, Button} from 'antd';
import {FormattedMessage} from 'react-intl';

import style from 'style/cmsBase.less';
import Loading from 'components/system/loading/loading';

import {getEditContentList} from 'reduxLib/actions/editContentList';

//TODO colums
const columns = [{
    title:'NO.',
    align:'center',
    className:'style.colStyle',
    dataIndex:'id',
    key:'id'
},{
    title:<FormattedMessage  id="intl.title"  defaultMessage={'标题'} />,
    align:'center',
    dataIndex:'title',
    key:'title',
    render:text=><a href="javascript:;">{text}</a>
},{
    title:<FormattedMessage  id="intl.browseVolume"  defaultMessage={'浏览量'} />,
    align:'center',
    dataIndex:'browse',
    key:'browse'
},{
    title:<FormattedMessage  id="intl.releaseTime"  defaultMessage={'发表时间'} />,
    align:'center',
    dataIndex:'releaseTime',
    key:'releaseTime'
},{
    title:<FormattedMessage  id="intl.recommend"  defaultMessage={'推荐'} />,
    align:'center',
    // dataIndex:'recommend',
    key:'recommend',
    render:(data,record)=>(
        data.recommend?<span className={style.textGreen}><FormattedMessage  id="intl.yes"  defaultMessage={'是'} /></span>
        :<span className={style.textOrange}><FormattedMessage  id="intl.no"  defaultMessage={'否'} /> </span>
    )
},{
    title:<FormattedMessage  id="intl.status"  defaultMessage={'状态'} />,
    align:'center',
    // dataIndex:'status',
    key:'status',
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
}];

//TODO
const data = [];


class EditContentBody extends Component {
    //TODO
    onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
    }

    //TODO
    componentWillMount = (e) => {
        this.props.getEditContentList();
    }


    render(){
        const dataSource = this.props.editContentList.editContentList;
        // console.log('dataSource:'+JSON.stringify(dataSource))

        return (
            <div>
                {/* FormattedMessage: <FormattedMessage id="intl.resendVerifyCode"  defaultMessage={'Resend'}/>
                 <br />
                内容编辑-详情
                <Pagination showSizeChanger onShowSizeChange={this.onShowSizeChange} defaultCurrent={3} total={500} /> */}

                <Table columns={columns} dataSource={dataSource}></Table>
            </div>
        )
    }
}

export default connect((state)=>({editContentList:state.editContentList}),{getEditContentList})(EditContentBody);