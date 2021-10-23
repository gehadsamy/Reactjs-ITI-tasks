import React from 'react'

const TodoList = ({ todos, deleteTodo }) => {
    const todosList =
        todos && todos.length > 0 ? (
            todos.map((todo, i) => {
                return (
                    <ul key={i} className="list-unstyled">
                        <li className="border shadow">
                            <div className="p-4 d-flex jusify-content-between align-items-center">
                                <div className="col-8 text-start">
                                    <p>Title : {todo.title}</p>
                                    <p>Content : {todo.content}</p>
                                </div>
                                <p className="btn btn-danger ms-auto " onClick={() => { deleteTodo(todo) }}>Delete</p>
                            </div>
                        </li>
                    </ul>
                );
            })
        ) : (
            <p className="h5 mx-5 text-muted">Sorry !! No items on the list ..</p>
        );

    return (
        <div className="text-left">
            <h5 className="mx-5 text-muted">Todos List</h5>
            {todosList}
        </div>
    );

};



export default TodoList