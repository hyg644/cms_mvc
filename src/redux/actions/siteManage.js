export const GET_SITE_INFO_REQUEST = 'siteinfo/GET_SITE_INFO_REQUEST';
export const GET_SITE_INFO_SUCCESS = 'siteinfo/GET_SITE_INFO_SUCCESS';
export const GET_SITE_INFO_FAIL = 'siteinfo/GET_SITE_INFO_FAIL';

function getSiteInfoRequest() {
    return {
        type: GET_SITE_INFO_REQUEST
    }
}

function getSiteInfoSuccess(siteinfo) {
    return {
        type: GET_SITE_INFO_SUCCESS,
        siteinfo: siteinfo 
    }
}

function getSiteInfoFail() {
    return {
        type: GET_SITE_INFO_FAIL
    }
}




export function getSiteInfo(){
    return {
        types: [GET_SITE_INFO_REQUEST, GET_SITE_INFO_SUCCESS, GET_SITE_INFO_FAIL],
        promise: client => client.get('http://localhost:8213/sitemanage')
    }
}