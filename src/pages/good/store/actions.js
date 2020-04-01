import {GOOD_DISPATCH_LIST,GOOD_SET_LIST} from './consts';
import {getGoodlist} from '../../../api/request'
export function goodsetlist(data){
    return {
        type:GOOD_SET_LIST,
        payload:data
    }
}
export function goodDispatchList(){
    return async (dispatch)=>{
        let data =  await getGoodlist();
        dispatch(goodsetlist(data.data));
    }
}
