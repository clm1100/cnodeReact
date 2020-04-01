import {SHARE_FETCH_LIST,SHARE_SET_LIST} from "./constants"
import {getSharelist} from '../../../api/request';

export const setShareListAction=(data)=>{
    return {
        type:SHARE_SET_LIST,
        payload:data
    }
}

export const fetchShareListAction = (num)=>{
    return async(dispatch)=>{
        let data = await getSharelist(num);
        dispatch(setShareListAction(data.data))
    }
}
