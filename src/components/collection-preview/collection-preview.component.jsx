import React from 'react'
import './collection-preview.styles.scss'
import CollectionItem from '../collection-item/collection-item.component'


const CollectionPreview = ( {title, items} ) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                //return 4 items in the array
                .filter((item,idx) => idx < 4)
                //destructed the item into id and ...otherItemProps
                // .map(({id, ...otherItemProps}) => (
                //     <CollectionItem key={id} {...otherItemProps}/> 

                .map((item) => (
                    <CollectionItem key={item.id} item={item}/> 
                ))
            }
        </div>
    
    </div>
)


export default CollectionPreview

// items.filter().map() chaining method to show the first 4 items. 
// Items gets rerender when the component gets rerender 