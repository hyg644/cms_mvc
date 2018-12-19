import counter from './reduces/counter';
import userInfo from './reduces/userInfo';
import siteInfo from './reduces/siteManage'
export default function combineReducers(state={},action){
    return {
        counter: counter(state.counter, action),
        userInfo: userInfo(state.userInfo, action),
        siteInfo:siteInfo(state.siteInfo,action)
    };
}