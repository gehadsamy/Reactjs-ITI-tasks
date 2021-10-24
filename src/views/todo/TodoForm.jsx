import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmission = (e) => {
        e.preventDefault();
        addTodo({ title, content });
        setTitle("");
        setContent("");
    };

    return (
        <div className="w-75 m-auto col-md-6 col-12">
            <h3 className="text-danger my-4">My TODO</h3>

            <form onSubmit={handleSubmission}>
                 <label className="h5"> Title</label>
                <input
                    className="form-control"
                     type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
             <label className="my-3 h5">Content</label>
                <textarea
                className="form-control "
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    cols="5"
                    rows="5"
                ></textarea>
                <button className="my-4 btn btn-primary  px-4" type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    );
};


export default TodoForm