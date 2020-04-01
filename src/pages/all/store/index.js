
import {ALL_SET_LIST,ALL_FETCH_LIST} from './consts'
function reducer(state={},{type,payload}){
    switch (type) {
        case ALL_SET_LIST:
            state.list = payload;
            return {...state};
        default:
            return state
    }
}

export default reducer;


