// get the combineReducers property from redux, which combines all the reducers 
import { combineReducers } from 'redux'

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'

export default combineReducers({
    user: userReducer,
    cart: cartReducer
})

