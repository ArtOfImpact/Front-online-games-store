import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlices'
import pagination from './slices/paginationSlices'
import cart from './slices/cartSlices'
import pizza from './slices/pizzasSlices'

export const store = configureStore({
    reducer: {
        filter,
        pagination,
        cart,
        pizza
    },
})
