import {SET_LOCALE_RESPONSE, SET_LOCALE_SUCCESS, SET_LOCALE_FAIL, GET_LOCALE_REQUEST, GET_LOCALE_SUCCESS, GET_LOCALE_FAIL} from '../actions/locale';
// import { GET_LOCALE_REQUEST, GET_LOCALE_SUCCESS, GET_LOCALE_FAIL} from '../actions/locale';

//TODO
const initState = {
    isLoading:false,
    locale:'en_US'
}

//TODO
export default function reducer(state = initState, action) {
    console.log(action.type)
    switch(action.type){
        case SET_LOCALE_RESPONSE:
        debugger
            return {
                ...state,
                isLoading:false,
                locale: 'en_US'
            };
        case SET_LOCALE_SUCCESS:
        debugger
            return {
                ...state,
                isLoading:true,
                locale: action.result.data
            };
        case SET_LOCALE_FAIL:
        debugger
            return {
                ...state,
                isLoading:false,
                locale: 'en_US'
            };
        //TODO default locale is English
        case GET_LOCALE_REQUEST:
            return {
                ...state,
                locale: 'en_US'
            };
        case GET_LOCALE_SUCCESS:

            return {
                ...state,
                isLoading:true,
                locale: action.result.data
            };
        case GET_LOCALE_FAIL:

            return {
                ...state,
                locale: 'en_US'
            };
        default:
   
            return state;
    }
}