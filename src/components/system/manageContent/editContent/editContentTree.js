//TODO 栏目管理-目录
import React,{Component} from 'react';
import {Tree, Button, Input, Layout} from 'antd';
import {connect} from 'react-redux';
import {getEditContentTree} from 'reduxLib/actions/editContentTree'
import Loading from 'components/system/loading/loading'

import request,{post,get} from 'utils/RequestNormal';

const DirectoryTree = Tree.DirectoryTree;
const { TreeNode } = Tree;
const Search = Input.Search;

class EditContentTree extends Component {
    // constructor(props){
    //     super(props);
    //     this.state ={
    //         isLoading:false,
    //         editContentTree:[],
    //         errorMsg:''
    //     }
    // }

    //TODO
    onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    }
    
    //TODO
    onExpand = () => {
        console.log('Trigger Expand');
    };

    //TODO
    onChange = () => {
        
    }

    //TODO
    componentWillMount = (e)=>{
        //TODO 加载列表数据
        this.props.getEditContentTree();
        // console.log('editContentTreeWill:'+JSON.stringify(this.props.editContentTree.editContentTree))
        
    }
    
    //TODO
    componentDidUpdate = (e) =>{
        // console.log('editContentTreeUpdate:'+JSON.stringify(this.props.editContentTree));
    }

    render(){
        const { isLoading,
                editContentTree,
                errorMsg
                } = this.props.editContentTree;
                
                // console.log('editContentTreeRender:'+JSON.stringify(editContentTree))
        

        const loop = data => data.map((item) => {
            // console.log('item:'+JSON.stringify(item));
            if(item.subNode){
                // console.log('item.nodeID:'+item.nodeID)
                return <TreeNode title={item.nodeName+'('+item.total+')'}  key={item.nodeID}>{loop(item.subNode)}</TreeNode>;
            }
            return <TreeNode title={item.nodeName+'('+item.total+')'}  key={item.nodeID}></TreeNode>;
        });

      

        

        return (
            <Layout style={{'backgroundColor':'#fff'}}>
                <Search style={{ marginBottom: 8 }} placeholder="Search" onChange={this.onChange} />
                <Loading display={isLoading}/>
                {/* {console.log('editContentTreeState:'+JSON.stringify(editContentTree))} */}
                
                <Tree
                    showLine
                    defaultExpandedKeys={['0-0']}
                    onSelect={this.onSelect}
                >
                     {loop(editContentTree)}
                </Tree>
            </Layout>
        )}
}

export default connect((state)=>({editContentTree:state.editContentTree}),{getEditContentTree})(EditContentTree);