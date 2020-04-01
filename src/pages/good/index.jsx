import React,{Component} from 'react';
import {connect} from 'react-redux';
import { goodsetlist,goodDispatchList } from './store/actions';

class Index extends Component{
    constructor(props) {
        super(props);
    }
    componentWillMount() {
         this.props.dispatch(goodDispatchList())
    }

    render() {
        return <div>
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
        list:state.Good.list
    }
}

export default connect(mapStateToProps)(Index);
