import {GOOD_DISPATCH_LIST,GOOD_SET_LIST} from './consts';
export function reducer(state={},{type,payload}) {
    switch (type) {
        case GOOD_SET_LIST:
            state.list = payload;
            return {...state}
        default:
            return state;
    }
}
