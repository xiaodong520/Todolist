import React, {Component} from 'react'
import TodolistUI from './TodolistUI'
import store from './store';
// import { CHANGE_INPUT_VALUE,ADD_TODOLIST_ITEM,DELETE_TODO_ITEM} from './store/actionType'
import { getInputvalueAction,add_todo_item_action,dele_todo_item_action} from './store/actionCreator'
class Todolist extends Component {
    constructor(props) {
        super(props);
        this.HandleChange = this.HandleChange.bind(this);
        this.HandleBtnClick = this.HandleBtnClick.bind(this);
        this.handlestoreChange=this.handlestoreChange.bind(this);
        this.HandleDelete=this.HandleDelete.bind(this);
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
            <TodolistUI  InputValue={this.state.InputValue}
                         HandleChange={this.HandleChange}
                         HandleBtnClick={this.HandleBtnClick}
                         list={this.state.list}
                         HandleDelete={this.HandleDelete}
            />
        );

    }
}

export default Todolist;