import React,{Component} from 'react';
import { Button } from 'antd';



const Column=[
    {
        title:'no',
        name:'no',
        dataIndex:'no',
        key:'no'
    },{
        title:'site',
        name:'site',
        dataIndex:'site',
        key:'site'
    },{
        title:'domain',
        name:'domain',
        dataIndex:'domain',
        key:'domain'
    },{
        title:'language',
        name:'language',
        dataIndex:'language',
        key:'language'
    },{
        title:'templates',
        name:'templates',
        dataIndex:'templates',
        key:'templates'
    },{
        title:'title',
        name:'title',
        dataIndex:'title',
        key:'title'
    },{
        title:'keywords',
        name:'keywords',
        dataIndex:'keywords',
        key:'keywords'
    },{
        title:'describe',
        name:'describe',
        dataIndex:'describe',
        key:'describe'
    },{
        title:'status',
        name:'status',
        dataIndex:'status',
        key:'status',
    },{
        title:'operation',
        name:'operation',
        dataIndex:'operation',
        key:'operation',
        render:(text,record)=>(
            <div>
           <Button style={{marginRight:20}}
                type="primary"  onClick={()=> getID(record.name)}
            >当前站点</Button>
            <Button style={{marginRight:20}}
                type="primary"  onClick={()=> getID(record.name)}
            >编辑</Button>
            <Button
                type="dashed"  onClick={()=> delData(record.no)}
            >删除</Button>
        </div>
        )
    }
]
export default Column