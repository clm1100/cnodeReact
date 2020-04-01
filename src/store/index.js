// import AllReducer from '../pages/all/store/index';
import Reducers from './reducers';
import {combineReducers,createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'


const {AllReducer,GoodReducer,shareReducer,TokenReducer} =Reducers;
const reducers = combineReducers({
    All:AllReducer,
    Good:GoodReducer,
    Share:shareReducer,
    Token:TokenReducer
});
const store = createStore(reducers,applyMiddleware(thunk));
export default store;
