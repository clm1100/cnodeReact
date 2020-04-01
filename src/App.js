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
