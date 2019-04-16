const defaultState={
    InputValue:'',
    list:[]
};
export  default (state=defaultState, action )=>{
    if(action.type==='change_input_value'){
        const newState= JSON.parse(JSON.stringify(state));
        newState.InputValue=action.value;
        return newState;
    }
    if(action.type==='add_todo_item'){
        const newState= JSON.parse(JSON.stringify(state));
        newState.list.push(newState.InputValue);
        newState.InputValue='';
        return newState;
    }
    if(action.type==='delete_todo_item'){
        const newState= JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    return state;
}