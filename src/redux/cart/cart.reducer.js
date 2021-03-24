import CartActionTypes from './cart.types'
import { addItemToCart } from './cart.utils'

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            //always return a new object 
            return{
                ...state,
                //cartItem will be a new array, spreading in the existing cartItems, 
                //then append the new item into the array
                // cartItems: [...state.cartItems, action.payload]

                //using utils addItemToCart function, to group same items
                cartItems: addItemToCart(state.cartItems, action.payload)
            }    
        default:
            return state     
    }
}

export default cartReducer

