import React,{Component} from 'react';
import style from 'style/cmsBase.less';
import {FormattedMessage} from 'react-intl';

// TODO siteManage 头部数据
const Column=[
    {
        title:'no',
        name:'no',
        dataIndex:'no',
        key:'no',
        align:'center',
        sorter: (a, b) => a.no.length - b.no.length
    },{
        title:<FormattedMessage id="intl.site"  defaultMessage={'站点'} />,
        name:'site',
        dataIndex:'site',
        key:'site',
        align:'center'
    },{
        title:<FormattedMessage id="intl.domain" defaultMessage={'当地域名'} />,
        name:'domain',
        dataIndex:'domain',
        key:'domain',
        align:'center'
    },{
        title:<FormattedMessage id="intl.language" defaultMessage={'语言'}/>,
        name:'language',
        dataIndex:'language',
        key:'language',
        align:'center'
    },{
        title:<FormattedMessage id="intl.template" defaultMessage={'模板'}/>,
        name:'templates',
        dataIndex:'templates',
        key:'templates',
        align:'center'
    },{
        title:<FormattedMessage id="intl.title" defaultMessage={'标题'}/>,
        name:'title',
        dataIndex:'title',
        key:'title',
        align:'center'
    },{
        title:<FormattedMessage id="intl.keyWord" defaultMessage={'关键词'} />,
        name:'keywords',
        dataIndex:'keywords',
        key:'keywords',
        align:'center'
    },{
        title:<FormattedMessage id="intl.describe" defaultMessage={'描述'}/>,
        name:'describe',
        dataIndex:'describe',
        key:'describe',
        align:'center'
    },{
        title:<FormattedMessage id="intl.status" defaultMessage={'状态'}/>,
        name:'status',
        dataIndex:'status',
        key:'status',
        align:'center',
        filters: [{
            text: 0,
            value: 0,
            }, {
            text: 1,
            value: 1, 
        }],
        onFilter: (value, record) =>{
            console.log(record.status)
            console.log(value)
            // record.status.indexOf(value) === 0
        },
        render:(text,record)=>(
            record.status?<span className={style.textGreen}><FormattedMessage id="intl.normal" defaultMessage={'正常'} /></span>
            :<span className={style.textOrange}><FormattedMessage id="intl.close" defaultMessage={'关闭'}/></span>
        ) 
        
    },{
        title:<FormattedMessage id="intl.operation" defaultMessage={'操作'}/>,
        name:'operation',
        dataIndex:'operation',
        key:'operation',
        align:'center',
        // render:(text,record)=>(
        //     <div>
        //         <Button style={{marginRight:20}}
        //             type="primary"  onClick={()=> getID(record.title)}
        //         >当前站点</Button>
        //         <Button style={{marginRight:20}}
        //             type="primary"  onClick={()=> getID(record.title)}
        //         >编辑</Button>
        //         <Button
        //             type="dashed"  onClick={()=> delData(record.no)}
        //         >删除</Button>
        //     </div>
        // )
    }
]

// let  getID=(e)=>{
//     console.log(e)
// }
// let delData=(e)=>{
//     console.log(e)
    
// }
// let mapDispatchToProps =(dispatch)=>{

// }

export default Column