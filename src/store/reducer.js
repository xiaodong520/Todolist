import { CHANGE_INPUT_VALUE,ADD_TODOLIST_ITEM,DELETE_TODO_ITEM} from './actionType'

const defaultState={
    InputValue:'',
    list:[]
};
export  default (state=defaultState, action )=>{
    if(action.type===CHANGE_INPUT_VALUE){
        const newState= JSON.parse(JSON.stringify(state));
        newState.InputValue=action.value;
        return newState;
    }
    if(action.type===ADD_TODOLIST_ITEM){
        const newState= JSON.parse(JSON.stringify(state));
        newState.list.push(newState.InputValue);
        newState.InputValue='';
        return newState;
    }
    if(action.type===DELETE_TODO_ITEM){
        const newState= JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    return state;
}