import React from 'react'
import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.actions'

// Special syntax in React for importing SVG
import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg' 

import './cart-icon.styles.scss'


//props coming from mapDispatchToProps and mapStateToProps
const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return(
        <div className='cart-icon' onClick={ toggleCartHidden }>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'> {itemCount} </span>
        </div>
    )
}

//Using the toggleCartHidden() imported from the cart.action
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

//can also be written as so since the action is imported, we want to us it as props
// const mapDispatchToProps = {
//     toggleCartHidden
// }


// [ {}, {}, {}] array of item objects
// this is a selector, pull in the state only using only a select portion  
// always get rerendered, passing in new props 
const mapStateToProps = ( {cart: {cartItems} }) => {
    // console.log('I am being called')
    return({
        itemCount: cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)