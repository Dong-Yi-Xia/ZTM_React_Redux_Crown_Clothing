import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'

// Special syntax in React for importing SVG
import { ReactComponent as Logo } from '../../assets/crown.svg' 

import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'

//connect is a higher order component, allow access to things related to redux,
//wrap it around the component which gives us a super component  
import { connect } from 'react-redux'

//the {currentUser, hidden} is coming from the mapStateToProps
const Header = ( {currentUser, hidden} ) => (
    <div className='header'>
        <Link className='logo-container' to='/'> 
            <Logo className='logo' />
        </Link>

        <div className='options'> 
            <Link className='option' to='/shop'> SHOP </Link>
            <Link className='option' to='/contact'> CONTACT </Link>
            {
                currentUser ? 
                <div className='option' onClick={ () => auth.signOut() }> SIGN OUT</div>
                :
                <Link className='option' to='/signin'> SIGN IN</Link>
            }
            
            <CartIcon />
        </div>
        {hidden ? null : <CartDropDown />  }
     

    </div>
)

// mapStateToProps is the standard naming, but it can be anything
// state is the rootReducer, which has a user property. which user has a currentUser property
// const mapStateToProps = (state) => ({
//     currentUser: state.user.currentUser
// })


//Destructing nested values, need to use :  
const mapStateToProps = ({user: {currentUser}, cart: {hidden} }) => ({
    currentUser,
    hidden
})


//using connect and mapStateToProps if we need properties from our Reducers 
export default connect(mapStateToProps)(Header)


//Use the firebase auth.signOut method, to signout 