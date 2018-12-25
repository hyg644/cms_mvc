//TODO set
export const SET_LOCALE_RESPONSE = 'locale/SET_LOCALE_RESPONSE';
export const SET_LOCALE_SUCCESS = 'locale/SET_LOCALE_SUCCESS';
export const SET_LOCALE_FAIL = 'locale/SET_LOCALE_FAIL';
//TODO get
export const GET_LOCALE_REQUEST = 'locale/GET_LOCALE_REQUEST';
export const GET_LOCALE_SUCCESS = 'locale/GET_LOCALE_SUCCESS';
export const GET_LOCALE_FAIL = 'locale/GET_LOCALE_FAIL';

//TODO setLocale
export function setLocaleResponse(){
    return {
        type: SET_LOCALE_RESPONSE
    }
}

//TODO 
export function setLocaleSuccess(){
    return {
        type: SET_LOCALE_SUCCESS
    }
}

//TODO 
export function setLocaleFail(){
    return {
        type: SET_LOCALE_FAIL
    }
}


//TODO getLocale
export function getLocaleRequest(){
    return {
        type: GET_LOCALE_REQUEST
    }
}

//TODO 
export function getLocaleSuccess(){
    return {
        type: GET_LOCALE_SUCCESS
    }
}

//TODO 
export function getLocaleFail(){
    return {
        type: GET_LOCALE_FAIL
    }
}


//TODO setLocale function
export function setLocale (dataObj){
    // debugger
    return {
        types:[SET_LOCALE_RESPONSE, SET_LOCALE_SUCCESS, SET_LOCALE_FAIL],
        promise:client => client.post('http://10.0.41.131:8213/locale',dataObj)
    }
}


//TODO getLocale function
export function getLocale (){
    return {
        types:[GET_LOCALE_REQUEST, GET_LOCALE_SUCCESS, GET_LOCALE_FAIL],
        promise:client => client.get('http://10.0.41.131:8213/locale')
    }
}