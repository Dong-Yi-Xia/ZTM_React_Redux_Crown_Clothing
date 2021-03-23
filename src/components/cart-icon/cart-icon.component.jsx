import React from 'react'
import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.actions'

// Special syntax in React for importing SVG
import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg' 

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartHidden }) => {
    return(
        <div className='cart-icon' onClick={ toggleCartHidden }>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'> 0 </span>
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

export default connect(null,mapDispatchToProps)(CartIcon)