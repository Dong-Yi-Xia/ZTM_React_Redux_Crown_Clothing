import React from 'react'
import { connect } from 'react-redux'

import './collection-item.styles.scss'

import CustomButton from '../custom-button/custom-button.component'
import { addItem } from '../../redux/cart/cart.actions'


//addItem is coming from mapDispatchToProps
const CollectionItem = ({item, addItem}) => {  
    const {name, price, imageUrl} = item

    return(
        <div className='collection-item'>
            <div className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'> {name} </span>
                <span className='price'> {price} </span>
            </div>

            <CustomButton onClick={() => addItem(item)} inverted>ADD TO CART </CustomButton>
        </div>
    )
}
//onClick pass the item props into the addItem as an argument 


//give the addItem as a Props to CollectionItem
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
}) 

// shorthand
// const mapDispatchToProps = {
//     addItem
// }



export default connect(null, mapDispatchToProps)(CollectionItem)