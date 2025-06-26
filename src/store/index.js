import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import sidebarReducer from './sidebarSlice';

export default configureStore({
    reducer: {
        todos: todoReducer,
        sidebar: sidebarReducer,
    }
});
