import React,{Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store'
import NextButton from "../../components/nextButton"
class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {
            num:1
        }
    }

    componentWillMount(){
        this.props.dispatch(actionCreators.fetchShareListAction())
    }
    setStateAsync=(state)=>{
        return new Promise(resolve=>this.setState(state,resolve))
    }
     nextPage= async ()=>{
        let num = this.state.num;
        num++;
        await this.setStateAsync({num});
        this.props.dispatch(actionCreators.fetchShareListAction(num))
    }
    render(){
        return <div>
            <p><span>当前页码数</span>{this.state.num}</p>
            <NextButton click={this.nextPage}/>
            <ul>
                {this.props.list&&this.props.list.map(e=>{
                    return <li key={e.id}>{e.title}</li>
                })}
            </ul>
        </div>
    }
}


const mapStateToProps = (state)=>{
    return {
        list:state.Share.list
    }
}

export default connect(mapStateToProps)(Index);
