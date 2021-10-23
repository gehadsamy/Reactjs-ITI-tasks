import { useDispatch, useSelector } from "react-redux";
import { addTodoAction, deleteTodoAction } from "../../Redux/Todo"
import TodoForm from "../../views/todo/TodoForm"
import TodoList from "../../views/todo/TodoList";
const ToDo = () => {
    
    const toDoState = useSelector(state =>state.todoReducer.todos)
    
    const dispatch = useDispatch()

    const addTodo = (task) => {
        dispatch(addTodoAction(task))
    };

    const deleteTodo = (item) => {
        dispatch(deleteTodoAction(item))
    }

    return (
        <div className="text-center py-2 todo-wrapper container d-flex">
            <TodoForm addTodo={addTodo} />
            <TodoList todos={toDoState} deleteTodo={deleteTodo} />
        </div>
    );
}
export default ToDo;