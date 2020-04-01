import {ALL_SET_LIST,ALL_FETCH_LIST} from './consts'
import {getAlllist} from '../../../api/request'
export const allSetList = (payload)=>{
    return {
        type:ALL_SET_LIST,
        payload
    }
}

export const allDispatchList = (num)=>{
    return async(dispatch)=>{
        let data = await getAlllist(num);
        dispatch(allSetList(data.data))
    }
}
