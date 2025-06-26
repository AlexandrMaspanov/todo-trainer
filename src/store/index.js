import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import sidebarReducer from './sidebarSlice';
import filterReducer from './filterSlice';
import uiReducer from './uiSlice';

export default configureStore({
    reducer: {
        todos: todoReducer,
        sidebar: sidebarReducer,
        filter: filterReducer,
        ui: uiReducer,
    }
});
