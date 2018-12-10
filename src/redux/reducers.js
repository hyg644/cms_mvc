import counter from './reduces/counter';
import userInfo from './reduces/userInfo';

export default function combineReducers(state={},action){
    return {
        counter: counter(state.counter, action),
        userInfo: userInfo(state.userInfo, action)
    };
}