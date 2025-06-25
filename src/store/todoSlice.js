import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {id: 1, title: 'Learn JS', completed: true},
        {id: 2, title: 'Learn React', completed: false},
        {id: 3, title: 'Learn Redux', completed: false},
    ]
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
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        clearCompleted(state) {
            state.todos = state.todos.filter(todo => !todo.completed);
        }
    },
});

export const { addTodo, toggleTodoComplete, removeTodo, clearCompleted } = todoSlice.actions;

export default todoSlice.reducer;