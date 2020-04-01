//管理reducer 代理reducer

import AllReducer from '../pages/all/store/index';
import GoodReducer from '../pages/good/store/index';
import {shareReducer} from '../pages/share/store/index'
import {TokenReducer} from './otherStore/token/index'

export default {
    AllReducer,
    GoodReducer,
    shareReducer,
    TokenReducer
}
