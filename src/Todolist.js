import React, {Component, Fragment} from 'react'
import Todoitem from './Todoitem'
import {Input, Button} from 'antd';
import store from './store';
// import { CHANGE_INPUT_VALUE,ADD_TODOLIST_ITEM,DELETE_TODO_ITEM} from './store/actionType'
import { getInputvalueAction,add_todo_item_action,dele_todo_item_action} from './store/actionCreator'
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
        // const action = {
        //     type: CHANGE_INPUT_VALUE,
        //     value: e.target.value
        // };
        const action=getInputvalueAction(e.target.value);
        store.dispatch(action);
    }
    handlestoreChange(){
        this.setState(store.getState());
    }

    HandleBtnClick() {
        // const action={
        //     type: ADD_TODOLIST_ITEM
        // };
        const action=add_todo_item_action();
        store.dispatch(action);
    }

    HandleDelete(index) {
        // const action={
        //     type: DELETE_TODO_ITEM,
        //     index
        // };
        const action=dele_todo_item_action(index);
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