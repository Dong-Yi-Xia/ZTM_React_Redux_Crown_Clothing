import React from 'react'

// Special syntax in React for importing SVG
import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg' 

import './cart-icon.styles.scss'

const CartIcon = () => {
    return(
        <div className='cart-icon'>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'> 0 </span>
        </div>
    )
}

export default CartIcon