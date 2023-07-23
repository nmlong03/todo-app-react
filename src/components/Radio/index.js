import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import filterSlice from '../Filter/filterSlice'
const Radio = () => {
    const dispatch = useDispatch()
    const [filterStatus, setFilterStatus] = useState('All');
    const handleStatusChange = (e) => {
        setFilterStatus(e.target.value);
        dispatch(filterSlice.actions.statusFilterChange(e.target.value));
      };
    return (
        <>
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Filter By Status </h3>
            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white" value={filterStatus} onChange={handleStatusChange}>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center pl-3">
                        <input type="radio" value="All" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                        <label for="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">All</label>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center pl-3">
                        <input type="radio" value="Completed" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                        <label for="horizontal-list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Completed</label>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center pl-3">
                        <input type="radio" value="Todo" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                        <label for="horizontal-list-radio-millitary" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Todo</label>
                    </div>
                </li>

            </ul>
        </>
    )
}

export default Radio