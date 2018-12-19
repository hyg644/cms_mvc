export const GET_SITE_INFO_REQUEST = 'userinfo/GET_SITE_INFO_REQUEST';
export const GET_SITE_INFO_SUCCESS = 'userinfo/GET_SITE_INFO_SUCCESS';
export const GET_SITE_INFO_FAIL = 'userinfo/GET_SITE_INFO_FAIL';

function getSiteInfoRequest() {
    return {
        type: GET_SITE_INFO_REQUEST
    }
}

function getSiteInfoSuccess(userInfo) {
    return {
        type: GET_SITE_INFO_SUCCESS,
        userInfo: userInfo 
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