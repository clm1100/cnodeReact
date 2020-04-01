import React,{Component,PureComponent} from 'react';
import {connect} from 'react-redux'
import {allDispatchList,allSetList} from './store/actions'
class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {
            num:1
        }
    }

    componentWillMount() {
        this.props.dispatch(allDispatchList());
    }
    nextPage=()=>{
        let num = this.state.num;
        num++;
        this.props.dispatch(allDispatchList(num));
        this.setState({
            num
        })
    }
    render() {
        return <div>
            <div>当前页数：<span>{this.state.num}</span></div>
            <button onClick={this.nextPage}>下一页</button>
            <List list ={this.props.list}/>
        </div>
    }

}



function List(props){
    return <ul>
                {props.list&&props.list.map(e=>{
                    return <li key={e.id}>
                        <span>{e.title}</span>
                    </li>
                })}
            </ul>
}


const mapPropsToState = (props)=>{
    return {
        list:props.All.list
    }
}

export default connect(mapPropsToState)(Index);
