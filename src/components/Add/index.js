import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {v4 as uuidv4} from 'uuid'
import todoSlice from '../TodoList/todoSlice';
const Add = () => {
    const [todoName, setTodoName] = useState('');
    const [priority, setPriority] = useState('Medium');
    const dispatch = useDispatch();
    const handleAddButtonClick = () => {
        dispatch(todoSlice.actions.addTodo({
            id: uuidv4(),
            name: todoName,
            priority: priority,
            completed: false
        }))
        setTodoName('');
        setPriority('Medium')
    }
    const handleInputChange = (e) => {
        setTodoName(e.target.value)
    } 
    const handlePriorityChange = (e) => {
        setPriority(e.target.value)
    }
    return (
        <div className='flex justify-center items-center mt-10'>
            <div className='w-full'>
                <label for="small-input" className="block text-sm font-medium text-gray-900 dark:text-white"></label>
                <input type="text"  className="block w-full p-2.5 border border-gray-300 rounded-lg" 
                value={todoName}
                onChange={handleInputChange} />
            </div>

            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={priority}
            onChange={handlePriorityChange}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddButtonClick}>
                ADD
            </button>
        </div>



    )
}

export default Add