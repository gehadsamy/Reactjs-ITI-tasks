// import { useState } from "react";
// import TodoForm from "../../components/todo/TodoForm";
// import TodoList from "../../components/todo/TodoList";
// import {useDispatch, useSelector} from "react-redux"
// import './Todo.css';
// import { addTodoAction } from "../../Redux/Todo";
// function Todo() {
//   // const [todos, setTodos] = useState([
//   //   {
//   //     title: "learn node js",
//   //     content: "Lorem ipsum dolor sit amet.",
//   //   },

//   // ]);
//   const todoState = useSelector(state => state.todos);
// console.log(todoState)

// const dispatch = useDispatch()
//   const addTodo = (task) => {
//     dispatch(addTodoAction(task));
//       };



//   return (
//     <div className="text-center py-2 todo-wrapper container">
//       <TodoForm addTodo={todoState} />
//       <TodoList todos={todoState} />
//     </div>
//   );
//   // console.log(todoState)

// }

// export default Todo;
