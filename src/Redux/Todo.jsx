
const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";
//Action
export const addTodoAction = (payload) =>{
    return{
        type: ADD_TASK,
        payload
    }
}

export const deleteTodoAction = (payload)=>{
    return{
        type: DELETE_TASK,
        payload
    }
}


//State
const initialState = {
    todos:[]
}


//Reducer
export const todoReducer = (state = initialState , action)=>{
    switch (action.type) {
        case ADD_TASK:
            return {...state, todos : [...state.todos , action.payload]}
        case DELETE_TASK:
            return {...state, todos : state.todos.filter((elem)=>{return (action.payload.title !== elem.title)})}
        default:
            return state;
    }
}
