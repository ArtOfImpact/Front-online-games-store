import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    catagories: "",
    sort: { name: 'популярности', sort: 'rating' },
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        setSort: (state, action) => {
            state.sort = action.payload
        },
        setCatagories: (state, action) => {
            if (action.payload === "Все") {
                action.payload = ""
            }
            console.log(action.payload)
            state.catagories = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setSort, setCatagories } = filterSlice.actions

export default filterSlice.reducer