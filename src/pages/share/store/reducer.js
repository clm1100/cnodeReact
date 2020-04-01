import {SHARE_FETCH_LIST,SHARE_SET_LIST} from "./constants"

export default function(state={},{type,payload}){
    switch (type) {
        case SHARE_SET_LIST:
            state.list = payload;
            return {...state}
        default:
            return state;
    }
}
