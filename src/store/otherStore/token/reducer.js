import {TOKEN_FETCH,TOKEN_SET,TOKEN_REMOVE} from './constants';

import store from 'store';
const token = store.get("token")||"";

export default function reducer(state=token,{type,payload}){
    switch (type) {
        case TOKEN_SET:
            state = payload;
            store.set('token',payload);
            return state;
        case TOKEN_REMOVE:
            state = "";
            store.remove('token');
            return state;
        default:
            return state
    }
}
