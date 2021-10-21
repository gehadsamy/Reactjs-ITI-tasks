import { createStore } from "redux";
const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";
//Action
export const addTodoAction = (payload) =>{
    return{
        type:ADD_TASK,
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
    todos:[{
        title: 'yjhjj'
    }]
}


//Reducer
function todoReducer(state = initialState , action){
    switch (action.type) {
        case ADD_TASK:
            return {...state , todos : [...state.todos , action.payload]}
        case DELETE_TASK:
            return {...state , todos : state.todos.filter((elem)=>{return action.payload !== elem.todoTitle})}
        default:
            return state;
    }
}


//Store
export const store_todo = createStore(todoReducer)