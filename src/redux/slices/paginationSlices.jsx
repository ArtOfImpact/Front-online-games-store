import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    page: 1,
    searchValue: ''
}

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState: initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload
        },
        setSearch: (state, action) => {
            state.searchValue = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setPage, setSearch } = paginationSlice.actions

export default paginationSlice.reducer