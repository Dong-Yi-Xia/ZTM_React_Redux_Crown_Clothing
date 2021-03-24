export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    )

    if(existingCartItem){
        //return a new array
        //always return a new version of the state, so componenet can rerender 
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 } :
            cartItem 
        )
    }

    //return a new array
    //if the item doesn't exist yet quantity property gets attached
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}