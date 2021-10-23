import { todoReducer } from "./Todo"
import { counterreducer } from "./count"
import { combineReducers } from "redux"

const rootReducers = combineReducers({
    todoReducer,
    counterreducer
})
export default rootReducers;