import {combineReducers} from 'redux';
import counter from './reducers/counter';
import userInfo from './reducers/userInfo';

// export default function combineReducers(state = {}, action) {
//     return {
//         counter: counter(state.counter, action),
//         userInfo: userInfo(state.userInfo, action)
//     }
// }

export default combineReducers({
    counter,
    userInfo
})