import {GET_SITE_INFO_REQUEST, GET_SITE_INFO_SUCCESS, GET_SITE_INFO_FAIL} from '../actions/editContentList';

const initState = {
    isLoading: false,
    editContentList: [],
    errorMsg: ''
}

export default function reducer(state = initState, action){
    switch (action.type){
        case GET_SITE_INFO_REQUEST:
            return {
                ...state,//合并新旧state
                isLoading:false,
                editContentList:[],
                errorMsg:'loading'
            };
        case GET_SITE_INFO_SUCCESS:
            return {
                ...state,
                isLoading: true,
                editContentList: action.result.data,
                errorMsg:'success'
            };
        case GET_SITE_INFO_FAIL:
            return {
                ...state,
                isLoading: false,
                editContentList: [],
                errorMsg:'request error'
            };
        default:
            return state;
    }
}