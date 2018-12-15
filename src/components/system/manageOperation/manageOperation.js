//TODO 运营管理
import React,{Component} from 'react';
import { Table, Button ,Icon,Input } from 'antd';
import request,{get} from 'utils/RequestNormal'
import { debug } from 'util';

const columns=[{
    title:'NO',
    dataIndex:'no'
},{
    title:'名称',
    dataIndex:'name'
},{
    title:'链接',
    dataIndex:'href'
},{
    title:'排序',
    dataIndex:'sort'
},{
    title:'状态',
    dataIndex:'status'
},{
    title:'图片',
    dataIndex:'img'
},{
    title:'操作',
    dataIndex:'operation',
    render:(text,record)=>(
        <div>
            <Button style={{marginRight:20}}
                type="primary" size="small" onClick={()=> getID(record.name)}
            >编辑</Button>
            <Button
                type="dashed" size="small" onClick={()=> delData(record.no)}
            >删除</Button>
        </div>
    )
}]
// function getID(e){
//     console.log('您点击了'+e)
// }
let getID=(e)=>{
    console.log('您点击了'+e)
}
let delData=(e)=>{
    console.log('您删除了'+e)
}

// const data=fetch('http://localhost:8213/slider').then((res)=>{
//     return res.json();
// }).then((Json)=>{
//    return Json
// })
// console.log(data)
// const datasource = [];
// for (let i = 0; i < 46; i++) {
//     datasource.push({
//     key: i,
//     name: `Edward King ${i}`,
//     href: 32,
//     address: `London, Park Lane no. ${i}`,
//   });
// }
export default class ManageOperation extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[],
            searcName:''
        }
    }

    start=()=>{
        console.log('点击了21312')
        console.log(this.state.list)
    }
    // getID=(e)=>{
    //     console.log('您点击了'+e)
    // }
    componentDidMount(){
            get('http://10.0.41.131:8213/slider').then((Json)=>{
                console.log(Json)
                // return Json
                this.setState({
                    list:Json
                })
            })
    }

    //TODO
    render(){
        return (
            <div>
                <div style={{marginBottom:10}}>
                    <Button
                        type="primary"
                        onClick={this.start}
                    >Reload</Button>
                </div>
                <Table rowKey={record=>record.no}  columns={columns} dataSource={this.state.list} ></Table>
            </div>
        )}
}