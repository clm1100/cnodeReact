import React,{Component,PureComponent} from 'react';
import {connect} from 'react-redux';
import {actionTypes} from '../../store/otherStore/token/index'
class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {
            token:'0401d222-8d01-4bee-95ca-143440a974c0'
        }
    }
    handleChange=(e)=>{
        let token = e.target.value
        this.setState({
            token
        })
    }
    ToLogin=()=>{
        this.props.dispatch(actionTypes.fetchToken(this.state.token))
    }
    loginOut=()=>{
        this.props.dispatch(actionTypes.removeToken())
    }
    render() {
        return <div>
            {this.props.token?<div>已经登录 <button onClick={this.loginOut}>退出登录</button> </div>:(<div>
                <span>Token:{this.props.token}</span>
                <input
                    type="text"
                    value={this.state.token}
                    onChange={this.handleChange}
                />
                <button onClick={this.ToLogin}>登录</button>
            </div>)}
        </div>
    }
}
const mapStateToprops = (state)=>{
    return {
        token:state.Token
    }
}

export default connect(mapStateToprops)(Index)


