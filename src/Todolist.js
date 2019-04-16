import React, {Component, Fragment} from 'react'
import Todoitem from './Todoitem'
import {Input, Button} from 'antd';
import store from './store';

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.HandleChange = this.HandleChange.bind(this);
        this.HandleBtnClick = this.HandleBtnClick.bind(this);
        this.handlestoreChange=this.handlestoreChange.bind(this);
        this.state = store.getState();
        store.subscribe(this.handlestoreChange)
    }

    HandleChange(e) {
        const action = {
            type: 'change_input_value',
            value: e.target.value
        };
        store.dispatch(action);
    }
    handlestoreChange(){
        this.setState(store.getState());
    }

    HandleBtnClick() {
        const action={
            type: 'add_todo_item'
        };
        store.dispatch(action);
    }

    HandleDelete(index) {
        const action={
            type: 'delete_todo_item',
            index
        };
        store.dispatch(action);
    }

    render() {
        return (
            <Fragment>
                <div>
                    <Input value={this.state.InputValue} onChange={this.HandleChange}
                           style={{width: '300px', marginRight: '10px'}}/>
                    <Button type="primary" onClick={this.HandleBtnClick}>提交</Button>
                </div>
                <div>
                    <ul>
                        {this.state.list.map((item, index) => {
                            return <Todoitem HandleDelete={this.HandleDelete.bind(this)} key={index} content={item}
                                             index={index}/>
                            // return <li key={index}>{item}</li>
                        })}
                    </ul>
                </div>
            </Fragment>
        );

    }
}

export default Todolist;