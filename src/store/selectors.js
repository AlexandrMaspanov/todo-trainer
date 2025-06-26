import { createSelector } from "reselect";

const selectTodos = (state) => state.todos.todos;
const selectFilter = (state) => state.filter;

export const selectFilteredTodos = createSelector(
    [selectTodos, selectFilter],
    (todos, filter) => {
        switch (filter) {
            case 'active':
                return todos.filter(todo => !todo.completed);
            case 'completed':
                return todos.filter(todo => todo.completed);
            default:
                return todos;
        }
    }
);
