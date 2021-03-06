import React from 'react';

const Todo = (props) => {

    const deleteClickedTodo = () => {}

    return (
        <li data-todos-index={props.key}>
            <span className="todo-item">{props.todo.body}</span>
            <span className="remove" onClick={ deleteClickedTodo }>Remove</span>
        </li> 
    );
}

export default Todo;