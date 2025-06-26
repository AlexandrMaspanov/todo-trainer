import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        editingId: null, // id редактируемой задачи
    },
    reducers: {
        startEditing: (state, action) => {
            state.editingId = action.payload.id
        },
        stopEditing: (state) => {
            state.editingId = null;
        },
    },
});

export const { startEditing, stopEditing } = uiSlice.actions;

export default uiSlice.reducer;
