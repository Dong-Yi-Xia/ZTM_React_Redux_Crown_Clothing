
const INITIAL_STATE = {
    currentUser: null
}

// the state is the current state, when the action gets fired
// if state is undefined, set the default state. 
const userReducer = (state = INITIAL_STATE, action) => {
    //create a switch statement, action.type will be a string value
    switch(action.type){
        case 'SET_CURRENT_USER' :
            // return a new object, to re-render component
            return {
                ...state,
                currentUser: action. payload
            }
        
        //if none of the action type matches, just return the state
        default:
            return state
    }
}

export default userReducer