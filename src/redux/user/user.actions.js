import { UserActionTypes } from './user.types'


// all action type string should be CAPS and snake_case
export const setCurrentUser = user => ({
    // type: 'SET_CURRENT_USER',
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})