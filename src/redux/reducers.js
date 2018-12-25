import counter from './reduces/counter';
import userInfo from './reduces/userInfo';
import locale from './reduces/locale';
import siteInfo from './reduces/siteManage';
import editContentTree from './reduces/editContentTree';
import editContentList from './reduces/editContentList';
//TODO
export default function combineReducers(state={},action){
    return {
        counter: counter(state.counter, action),
        userInfo: userInfo(state.userInfo, action),
        locale: locale(state.locale, action),
        siteInfo:siteInfo(state.siteInfo,action),
        editContentTree:editContentTree(state.editContentTree,action),
        editContentList:editContentList(state.editContentList,action)
    };
} 