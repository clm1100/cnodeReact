import {TOKEN_FETCH,TOKEN_SET,TOKEN_REMOVE} from './constants';
import {getToken} from '../../../api/request'
export function setToken(data){
    return {
        type:TOKEN_SET,
        payload:data
    }
}

export function fetchToken(token) {
    return async(dispatch)=>{
        let res = await getToken(token);
        console.log(res);
        if(res.success){
            dispatch(setToken(token));
            let {success,...rest} = res;
            //补全设置User；

        }

    }
}

export function removeToken() {
    return {
        type:TOKEN_REMOVE
    }
}
