import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import todoSlice from '../TodoList/todoSlice'
const Todo = ({todo}) => {
    const dispatch = useDispatch();

    const [checked, setChecked] = useState(todo.completed);
  
    const toggleCheckbox = () => {
      setChecked(!checked);
      dispatch(todoSlice.actions.toggleTodoStatus(todo.id));
    };
    return (
        <>
            <ul key={todo?.id} className=" w-full flex flex-col">
                <li className={checked ? "inline-flex line-through items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px" : "inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px"}>
                    <div className="relative flex items-start w-full">
                        <div className="flex items-center h-5">
                            <input checked={checked}  onChange={toggleCheckbox} id="hs-list-group-item-radio-1" name="hs-list-group-item-radio" type="checkbox" className="border-gray-200 rounded-full dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                        </div>
                        <label for="hs-list-group-item-radio-1" className="ml-3 block w-full text-sm text-gray-600 dark:text-gray-500">
                            {todo?.name}
                        </label>
                    </div>
                    <div>
                        {todo?.priority}
                    </div>
                </li>
            </ul>
        </>
    )
}

export default Todo