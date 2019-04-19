import {ADD_TODOLIST_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM} from "./actionType";

export const getInputvalueAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});
export const add_todo_item_action = () => ({
    type: ADD_TODOLIST_ITEM
});
export const dele_todo_item_action=(index)=>{
    return (
        {
            type: DELETE_TODO_ITEM,
            index
        }
    )
}
