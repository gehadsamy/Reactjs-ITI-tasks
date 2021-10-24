import React from 'react'

const TodoList = ({ todos, deleteTodo }) => {
    const todosList =
        todos && todos.length > 0 ? (
            todos.map((todo, i) => {
                return (
                    <li key={i} className="border shadow mb-3">
                        <div className="p-2 d-flex jusify-content-between align-items-center">
                            <div className="col-8 text-start">
                                <p>Title : {todo.title}</p>
                                <p>Content : {todo.content}</p>
                            </div>
                            <div className='w-100 text-center'>
                                <a style={{'color':'red'}} onClick={() => { deleteTodo(todo) }}><i class="fas fa-trash"></i></a>
                            </div>
                        </div>
                    </li>
                );
            })
        ) : (
            <p className="h5 text-muted">Sorry !! No items on the list ..</p>
        );

    return (
        <div className="text-left col-md-6 ml-3 col-12">
            <h5 className="text-muted">Todos List</h5>
            <ul className="list-unstyled">
                {todosList}
            </ul>
        </div>
    );

};



export default TodoList