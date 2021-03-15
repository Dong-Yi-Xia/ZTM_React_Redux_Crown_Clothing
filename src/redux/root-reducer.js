// get the combineReducers property from redux, which combines all the reducers 
import { combineReducers } from 'redux'

import userReducer from './user/user.reducer'


export default combineReducers({
    user: userReducer
})

