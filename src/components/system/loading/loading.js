import React, {Component} from 'react';
import { Icon } from 'antd';

import style from 'style/cmsBase.less'


export default class Loading extends Component{
    constructor(props){
        super(props);
    }
    
    render (){
        // let display = this.props.display;
        // console.log('typeof(display):'+typeof(display))
        // //TODO 默认不显示
        // if(display===''||display===null){
        //     display = true;
        // }
        let display = 'hide';
        
        this.props.display ? display='hide':display='show';

        if(display==='hide'){
            return null;
        }else{
            return (<div className={style.loading}><div className={style.loadingBox}><Icon type="loading" /></div></div>)
        }
        
    }  
}