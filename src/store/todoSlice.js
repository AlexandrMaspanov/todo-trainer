import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [
            {id: 1, title: 'Learn JS', completed: true},
            {id: 2, title: 'Learn React', completed: false},
            {id: 3, title: 'Learn Redux', completed: false},
        ]
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: new Date().toISOString(),
                title: action.payload.title,
                completed: false,
            });
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        toggleTodoComplete(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
        },
        removeAllCompleted(state, action) {
            state.todos = state.todos.filter(todo => todo.completed === false);
        }
    },
});

export const { addTodo, removeTodo, toggleTodoComplete, removeAllCompleted } = todoSlice.actions;

export default todoSlice.reducer;