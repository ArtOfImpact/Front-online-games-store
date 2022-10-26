import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizzas/fetchPizzasStatus', async (params) => {
    const { sort, page, category, search } = params;
    console.log(sort, page, category, search)
    const { data } = await axios.get(`https://mall-games.herokuapp.com/games?${category}&page=${page - 1}&sort=${sort.sort}&${search}`)
    console.log(data)
    return data;
}
)
// http://localhost:4000/games?category=Action-adventure&page=0&sort=price&search=man
// https://62e3a62bb54fc209b88d822d.mockapi.io/items?${category}&limit=8&page=${page}&sortBy=${sort.sort}&order=desc&${search}
const initialState = {
    items: [],
    status: 'loading',
    All: "",
    limit: "",
}

export const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState: initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload
        },
    },
    extraReducers: {
        [fetchPizzas.pending]: (state) => {
            state.status = 'loading';
            state.items = [];
        },
        [fetchPizzas.fulfilled]: (state, action) => {
            state.items = action.payload.Page || action.payload.Search;
            state.All = action.payload.All || action.payload.all || action.payload.AllPage;
            state.limit = action.payload.limit;
            state.status = 'success';
        },
        [fetchPizzas.rejected]: (state) => {
            state.status = 'error';
            state.items = [];
        }
    }
})

export const selectPizza = (state) => state.pizza;
// Action creators are generated for each case reducer function
export const { setItems } = pizzasSlice.actions

export default pizzasSlice.reducer