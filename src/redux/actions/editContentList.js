export const GET_SITE_INFO_REQUEST = 'editContentList/GET_SITE_INFO_REQUEST';
export const GET_SITE_INFO_SUCCESS = 'editContentList/GET_SITE_INFO_SUCCESS';
export const GET_SITE_INFO_FAIL = 'editContentList/GET_SITE_INFO_FAIL';

function getEditContentListRequest() {
    return {
        type: GET_SITE_INFO_REQUEST
    }
}

function getEditContentListSuccess(siteinfo) {
    return {
        type: GET_SITE_INFO_SUCCESS,
        siteinfo: siteinfo 
    }
}

function getEditContentListFail() {
    return {
        type: GET_SITE_INFO_FAIL
    }
}


export function getEditContentList(){
    return {
        types: [GET_SITE_INFO_REQUEST, GET_SITE_INFO_SUCCESS, GET_SITE_INFO_FAIL],
        promise: client => client.get('http://10.0.41.131:8213/editContentList')
    }
}