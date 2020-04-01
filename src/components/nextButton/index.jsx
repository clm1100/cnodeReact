import React ,{Component} from 'react';

class NextButton extends Component{
    constructor(props) {
        super(props);
    }
    nextPage=()=>{
        this.props.click&&this.props.click()
    }
    render() {
        return <button onClick={this.nextPage}>
            下一页
        </button>
    }
}

export default NextButton;
