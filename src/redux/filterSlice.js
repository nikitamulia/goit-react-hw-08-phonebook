import {createSlice} from '@reduxjs/toolkit'



const filterSlice = createSlice({
    name: 'filters',
    initialState: '',
    reducers: {
        setStatusFilter(state, action) {
        return action.payload;
        },
    },
})
export const { setStatusFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
export const getStatusFilter = state => state.filter;