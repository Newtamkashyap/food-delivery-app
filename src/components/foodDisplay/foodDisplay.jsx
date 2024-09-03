import React, { useContext } from 'react'
import './foodDisplay.css';
import FoodItem from '../foodItem/foodItem';
import { StoreContext } from '../../context/storeContext'
function FoodDisplay({ category }) {

    const { food_list } = useContext(StoreContext)
    return (
        <div className='food-display' id="food-display">
            <h2>Top dishes near you</h2>
            <div className='food-display-list'>
                {
                    food_list.map((item, index) => {
                        if (category === "All" || category === item.category) {
                            return <FoodItem key={index}
                                id={item._id}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                                name={item.name} />
                        }

                    })
                }
            </div>
        </div>
    )
}

export default FoodDisplay