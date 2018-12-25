import {GET_SITE_INFO_REQUEST, GET_SITE_INFO_SUCCESS, GET_SITE_INFO_FAIL} from '../actions/editContentTree';

const initState = {
    isLoading: false,
    editContentTree: [],
    errorMsg: ''
}

export default function reducer(state = initState, action){
   
    switch (action.type){
        case GET_SITE_INFO_REQUEST:
    
            return {
                ...state,//合并新旧state
                isLoading:false,
                editContentTree:[],
                errorMsg:'loading'
            };
        case GET_SITE_INFO_SUCCESS:
            return {
                ...state,
                isLoading: true,
                editContentTree: action.result.data,
                errorMsg:'success'
            };
        case GET_SITE_INFO_FAIL:
            return {
                ...state,
                isLoading: false,
                editContentTree: [],
                errorMsg:'request error'
            };
        default:
       
            return state;
    }
}