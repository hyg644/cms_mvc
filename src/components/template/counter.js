import React, {Component} from 'react';
import {increment, decrement, reset} from '../../redux/actions/counter';

import {connect} from 'react-redux';
 
class Counter extends Component {
    render() {
        return (
            <div>
                <div>当前计数为{this.props.counter.count}</div>
                <button onClick={()=>{
                    console.log('调用自增函数');
                    this.props.increment();
                }}>自增</button>
                <button onClick={()=>{
                    console.log('调用自减函数');
                    this.props.decrement();
                }}>自减</button>
                <button onClick={()=>{
                    console.log('重置');
                    this.props.reset();    
                }}>重置</button>
            </div>
        )
    }
}

/**
 * mapStateToProps: 把redux的state，转为组件的Props
 * mapDispatchToprops: 把发射actions的方法，转为Props属性函数
 * @param {*} state 
 */

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
};

const mapDispatchToprops = (dispatch) => {
    return {
        increment:() => {
            dispatch(increment());
        } ,
        decrement:() => {
            dispatch(decrement());
        },
        reset:() => {
            dispatch(reset());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToprops)(Counter);