import counter from './reduces/counter';
import userInfo from './reduces/userInfo';
import locale from './reduces/locale';

export default function combineReducers(state={},action){
    return {
        counter: counter(state.counter, action),
        userInfo: userInfo(state.userInfo, action),
        locale: locale(state.locale, action)
    };
}