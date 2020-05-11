## Cnode前端项目，采用React,redux

### 作为项目架构；

### store的核心代码：
```
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

```

### 路由配置代码
```
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import {connect} from 'react-redux'

import All from './pages/all/index'
import Good from './pages/good/index'
import Share from './pages/share/index'
import Login from './components/login'

 function App(props) {
    return (
        <div>
            <div>
                {props.token?"登录之后才能看见的列表：":null}
            </div>
            <div>
                <Login/>
            </div>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">all</Link>
                            </li>
                            <li>
                                <Link to="/good">Good</Link>
                            </li>
                            <li>
                                <Link to="/share">share</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/all" component={All} />
                        <Route path="/good" component={Good} />
                        <Route path="/share" component={Share} />
                        <Redirect  from="/" to="/all" />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

const mapStateToProps = (state)=>{
    return {
        token:state.Token
    }
}

export default connect(mapStateToProps)(App);

```

