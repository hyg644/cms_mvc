import {increment,decrement,reset} from './actions/counter';

import store from './store';

//TODO
console.log(store.getState());


/**
 * store 有以下职责：
 * 维持应用的 state；
 * 提供 getState() 方法获取 state；
 * 提供 dispatch(action) 触发reducers方法更新 state；
 * 通过 subscribe(listener) 注册监听器;
 * 通过 subscribe(listener) 返回的函数注销监听器。
 */


//TODO
// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
let unsubscribe = store.subscribe(() => console.log(store.getState()));

//TODO
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());

//TODO
unsubscribe();
