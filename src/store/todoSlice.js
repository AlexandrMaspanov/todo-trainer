import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUserId, getTodosByUserId } from '../utils/storage';

const initialState = {
    todos: getTodosByUserId(getCurrentUserId()),
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: new Date().toISOString(),
                title: action.payload.title,
                completed: false,
            });
        },
        toggleTodoComplete(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            if (toggledTodo) {
                toggledTodo.completed = !toggledTodo.completed;
            }
        },
        updateTodo(state, action) {
            const editedTodo = state.todos.find(todo => todo.id === action.payload.id);
            if (editedTodo) {
                editedTodo.title = action.payload.title;
            }
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        clearCompleted(state) {
            state.todos = state.todos.filter(todo => !todo.completed);
        },
        setTodos(state, action) {
            state.todos = action.payload;
        },
    },
});

export const { addTodo, toggleTodoComplete, updateTodo, removeTodo, clearCompleted, setTodos } = todoSlice.actions;

export default todoSlice.reducer;
