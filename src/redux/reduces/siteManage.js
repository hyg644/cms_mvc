import {GET_SITE_INFO_REQUEST, GET_SITE_INFO_SUCCESS, GET_SITE_INFO_FAIL} from '../actions/siteManage'

const initState = {
    isLoading: false,
    siteInfo: [],
    errorMsg: ''
}

export default function reducer(state = initState, action){
    switch (action.type){
        case GET_SITE_INFO_REQUEST:
            return {
                ...state,//合并新旧state
                isLoading:true,
                siteInfo:[],
                errorMsg:''
            };
        // case GET_USER_INFO_SUCCESS:
        //     return {
        //         ...state,
        //         isLoading: false,
        //         siteInfo: action.siteInfo,
        //         errorMsg:''
        //     };
        case GET_SITE_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                siteInfo: action.result.data,
                errorMsg:''
            };
        case GET_SITE_INFO_FAIL:
            return {
                ...state,
                isLoading: false,
                siteInfo: {},
                errorMsg:'请求错误'
            };
        default:
            return state;
    }
}