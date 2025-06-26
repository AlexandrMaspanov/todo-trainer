import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import sidebarReducer from './sidebarSlice';
import filterReducer from './filterSlice';

export default configureStore({
    reducer: {
        todos: todoReducer,
        sidebar: sidebarReducer,
        filter: filterReducer,
    }
});
