import React,{Component} from 'react'

class Todoitem extends Component{
    constructor(props){
        super(props);
        this.HandleDelete=this.HandleDelete.bind(this);
    }
    HandleDelete(){
       this.props.HandleDelete(this.props.index);
    }
    render(){
        return <li onClick={this.HandleDelete}>{this.props.content}</li>
    }
}
export default Todoitem;