import React from 'react';
import PropTypes from 'prop-types';
import Todo from './todo';


const TodoList = ({todoList,onTodoClick}) => {
    return (
        <div>
            <h1>
                Your Todos
            </h1>
            <ul>
                {
                    todoList.map((todo,index)=>(
                        <Todo key={index} completed={todo.completed} text={todo.text} id={todo.id} onClick={()=>onTodoClick(todo.id)}></Todo>
                    ))
                }
            </ul>
        </div>
    );
};


TodoList.propTypes = {
    todoList: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            text:PropTypes.string.isRequired,
            completed:PropTypes.bool.isRequired,
        })
    ).isRequired,
    onTodoClick:PropTypes.func.isRequired
};


export default TodoList;
