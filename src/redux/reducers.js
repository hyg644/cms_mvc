import counter from './reduces/counter';
import userInfo from './reduces/userInfo';
import locale from './reduces/locale';
import siteInfo from './reduces/siteManage'
export default function combineReducers(state={},action){
    return {
        counter: counter(state.counter, action),
        userInfo: userInfo(state.userInfo, action),
        locale: locale(state.locale, action),
        siteInfo:siteInfo(state.siteInfo,action)
    };
}