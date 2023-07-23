import {configureStore} from '@reduxjs/toolkit'
import todoSlice from '../components/TodoList/todoSlice';
import filterSlice from '../components/Filter/filterSlice';

const store = configureStore({
    reducer: {
        filters: filterSlice.reducer,
        todoList: todoSlice.reducer,
    }
})
export default store;