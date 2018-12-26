import {SET_LOCALE_RESPONSE, SET_LOCALE_SUCCESS, SET_LOCALE_FAIL, GET_LOCALE_REQUEST, GET_LOCALE_SUCCESS, GET_LOCALE_FAIL} from '../actions/locale';

//TODO
const initState = {
    isLoading:false,
    locale:''
}

//TODO
export default function reducer(state = initState, action) {
    // console.log(action.type)
    switch(action.type){
        case SET_LOCALE_RESPONSE:
            return {
                ...state,
                isLoading:false,
                locale: ''
            };
        case SET_LOCALE_SUCCESS:
            // debugger
            return {
                ...state,
                isLoading:true,
                locale: action.result.data.locale
            };
        case SET_LOCALE_FAIL:
            return {
                ...state,
                isLoading:false,
                locale: ''
            };
        //TODO default locale is English
        case GET_LOCALE_REQUEST:
            return {
                ...state,
                locale: ''
            };
        case GET_LOCALE_SUCCESS:
            // debugger 
            return {
                ...state,
                isLoading:true,
                locale: action.result.data.locale
            };
        case GET_LOCALE_FAIL:

            return {
                ...state,
                locale: ''
            };
        default:
   
            return state;
    }
}