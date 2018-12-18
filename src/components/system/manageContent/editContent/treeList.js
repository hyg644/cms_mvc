//TODO 栏目管理-目录
import React,{Component} from 'react';
import {Tree, Button, Input} from 'antd';

import request,{post,get} from 'utils/RequestNormal';

const DirectoryTree = Tree.DirectoryTree;
const { TreeNode } = Tree;

export default class TreeList extends Component {
    onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    }

    // onSelect = () => {
    //     console.log('Trigger Select');
    //   };
    
    onExpand = () => {
        console.log('Trigger Expand');
    };

    componentWillMount=(e)=>{
        get('http://10.0.41.131:8213/contentTreeList')
        .then((res)=>{
        //   console.log('res:'+JSON.stringify(res))
          if(res){
            //this.props.history.push('/dashboard');
          }
        })
        // .catch((error)=>{
        //     console.log('error:'+error)
        // })
    }
    

    render(){
        return (
            <Tree
                showLine
                defaultExpandedKeys={['0-1']}
                onSelect={this.onSelect}
            >
                <TreeNode title="体育(3455) 0" key="0-0">
                    <TreeNode title="足球(239) 0-0" key="0-0-0" isLeaf />
                    <TreeNode title="板球(234) 0-1" key="0-0-1" isLeaf />
                </TreeNode>
                <TreeNode title="政治(234324) 1" key="0-1">
                    <TreeNode title="国内(23424) 1-1-0" key="0-1-0">
                        <TreeNode title="浙江(234) 0-1-0-1" key="0-1-0-1" isLeaf/>
                        <TreeNode title="北京(234) 0-1-0-2" key="0-1-0-2" isLeaf/>
                    </TreeNode>
                    <TreeNode title="国际(345) 1-1" key="0-1-1" isLeaf />
                </TreeNode>
                <TreeNode title="足球(234)" key="0-2" />
                <TreeNode title="娱乐(345)" key="0-3" />
                <TreeNode title="政治(34)" key="0-4" />
                <TreeNode title="国际新闻(345)" key="0-5" />
                <TreeNode title="体育(345)" key="0-6" />
                <TreeNode title="生活(4354)" key="0-7" />
                <TreeNode title="时尚(4354)" key="0-8" />
                <TreeNode title="奇闻(34545)" key="0-9" />
            </Tree>
        )}
}