import React from 'react'
import { useSelector } from 'react-redux'
import {  todosRemainingSelector } from '../../selectors/index'
import Todo from '../Todo'

const TodoList = () => {
    const todoList = useSelector(todosRemainingSelector)
    return (
        <div className='mt-10 w-full'>
        {todoList?.map((todo) => 
        <Todo key={todo.id} todo={todo} />
        )}
        </div>
    )
}

export default TodoList