import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalPrice: 0,
    cart: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addCart: (state, action) => {
            const findItem = state.cart.find((el) => el.id === action.payload.id)
            if (findItem) {
                findItem.count++
            } else {
                state.cart.push(
                    {
                        ...action.payload,
                        count: 1
                    }
                )
            }
            state.totalPrice += action.payload.price
        },
        cartMinus: (state, action) => {
            const findItem = state.cart.find((el) => el.id === action.payload.id)
            console.log(findItem.count)
            if (findItem.count > 1) {
                findItem.count--
                state.totalPrice -= action.payload.price
            }
        },
        removeCart: (state, action) => {
            const removeCart = state.cart.filter((el) => el.id !== action.payload.id)
            if (removeCart) {
                state.cart = removeCart
                state.totalPrice -= action.payload.price * action.payload.count
            }
        },
        clearCart: (state, action) => {
            state.cart = []
            state.totalPrice = 0
        },
    },
})

export const selectCart = (state) => state.cart;

export const selectCartItemById = (id) => (state) => state.cart.cart.find((el) => el.id === id)

export const { addCart, clearCart, cartMinus, removeCart } = cartSlice.actions

export default cartSlice.reducer