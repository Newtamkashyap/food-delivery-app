import React, { useContext } from 'react'
import './foodItem.css';
import { StoreContext } from '../../context/storeContext';
function FoodItem({ id, name, price, description, image }) {

    
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);


return (
    <div className='food-item'>
        <div className='food-item-img-container'>
            <img className='food-item-image' src={image} alt="" />
            {
                !cartItems[id]
                    ?
                    <img className='add' onClick={() => addToCart(id)} src={"images/add_icon_white.png"} alt="" />
                    :
                    <div className='food-item-counter'>
                        <img onClick={() => removeFromCart(id)} src={"images/remove_icon_red.png"} />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCart(id)} src={"images/add_icon_green.png"} />
                    </div>
            }
        </div>
        <div className='food-item-info'>
            <div className='food-item-name-rating'>
                <p>{name}</p>
                <img src={"images/rating_starts.png"} />
            </div>
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price' >${price}</p>


    </div>
)
}

export default FoodItem;