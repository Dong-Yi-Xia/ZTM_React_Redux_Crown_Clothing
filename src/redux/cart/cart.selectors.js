import { createSelector } from 'reselect'

// there is input selector that doesn't use createSelector 
// there is output selector that do use createSelector 

//input selector
const selectCart = state => state.cart
//the cart get pass into the output 2nd argument


export const selectCartItems = createSelector(
    //takes two arguments, a collection of inputSelect, a function
    //if more inputSelector, return in same order pass in. [selector1, selector2], (selector1, selector2) => {}  
    [selectCart],
    (cart) => cart.cartItems
    //the cartItems get pass into the output 2nd argument
)


export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
    //return a number
)