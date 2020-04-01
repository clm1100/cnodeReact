import {USER_FETCH,USER_SET} from './constants';
import store from 'store';
export default function reducer(state,{type,payload}){
    switch (type) {
        case USER_SET:
            state.user = payload;
            return {...state}
        default:
            return state;
    }
}
