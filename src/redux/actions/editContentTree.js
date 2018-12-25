export const GET_SITE_INFO_REQUEST = 'editContentTree/GET_SITE_INFO_REQUEST';
export const GET_SITE_INFO_SUCCESS = 'editContentTree/GET_SITE_INFO_SUCCESS';
export const GET_SITE_INFO_FAIL = 'editContentTree/GET_SITE_INFO_FAIL';

function getEditContentTreeRequest() {
    return {
        type: GET_SITE_INFO_REQUEST
    }
}

function getEditContentTreeSuccess(siteinfo) {
    return {
        type: GET_SITE_INFO_SUCCESS,
        siteinfo: siteinfo 
    }
}

function getEditContentTreeFail() {
    return {
        type: GET_SITE_INFO_FAIL
    }
}


export function getEditContentTree(){
    return {
        types: [GET_SITE_INFO_REQUEST, GET_SITE_INFO_SUCCESS, GET_SITE_INFO_FAIL],
        promise: client => client.get('http://10.0.41.131:8213/editContentTree')
    }
}