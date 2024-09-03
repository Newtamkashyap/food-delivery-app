import { useContext } from 'react'
import './placeOrder.css'
import { StoreContext } from '../../../context/storeContext'

export const PlaceOrder = () => {

    const{getCartTotalAmount}=useContext(StoreContext);
    return (

        <form className='place-order'>
            <div className='place-order-left'>
                <p className='title'>Delivery Information</p>
                <div className='multi-fields'>
                    <input type="text" placeholder='First name' />
                    <input type="text" placeholder='Last name' />

                </div>

                <input type="email" placeholder='Email address' />
                <input type="text" placeholder='Street' />
                <div className='multi-fields'>
                    <input type="text" placeholder='City' />
                    <input type="text" placeholder='State' />
                </div>
                <div className='multi-fields'>
                    <input type="text" placeholder='Zip code' />
                    <input type="text" placeholder='Country' />
                </div>
                <input type="text" placeholder='Phone' />
            </div>
            <div className='place-order-right'>
                <div className='cart-bottom'>
                    <div className='cart-total'>
                        <h2>Cart Totals</h2>
                        <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${getCartTotalAmount()}</p>
                        </div>
                        <hr />

                        <div className="cart-total-details">
                            <p>Delievry Fee</p>
                            <p>${getCartTotalAmount() === 0 ? 0 : 2}</p>
                        </div>
                        <hr />

                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>${getCartTotalAmount() === 0 ? 0 : getCartTotalAmount() + 2}</b>
                        </div>
                        </div>
                        <button >PROCEED TO PAYMENT</button>
                    </div>

                </div>
                </div>
        </form>


    )
}