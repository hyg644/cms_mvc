import { hashHistory } from 'react-router-dom';

export default function(method,url,body){
    method = method.toUpperCase();

    if(method==='GET'){
        //
        body = undefined;
    }else{
        body =  body && JSON.stringify(body);
    }

    return fetch(url, {
        method,
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Token': sessionStorage.getItem('access-token')|| ''
        },
        body
    }).then((res)=>{
        if(res.status === 401){
            // hashHistory.push('/login');
            location.replace('/login')
            
            return Promise.reject('Unauthorized');
        }else{
            const token = res.headers.get('access-token');
            if(token){
                sessionStorage.setItem('access-token',token);
            }
        }
        return res.json();
    });
}

export const get = url => request('GET', url);
export const post = (url, body) => request('POST', url, body);
export const put = (url, body) => request('PUT', url, body);
export const del = (url, body) => request('DELETE', url, body);