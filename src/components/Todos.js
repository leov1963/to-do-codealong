import React from 'react';
import Todo from './Todo';

const Todos = (props) => {

    const deleteClickedTodo = () => { props.deleteTodo(props.todo)}

    const listOfTodos = props.todos.map((todoData, index)=> {
        return (
            <Todo key={todoData._id} todo={todoData} deleteTodo={props.deleteTodo} />
            
        )
    })

    return (
        <ul>
            {listOfTodos}
        </ul>
    );
}

export default Todos;