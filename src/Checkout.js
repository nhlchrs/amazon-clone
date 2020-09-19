import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from "./StateProvider";
import Subtotal from './Subtotal'
function Checkout() {
    const [{basket}]= useStateValue();
    return (
        <div className="checkout">
        <div className="checkout_left">
           <img src="https://business.twitter.com/content/dam/business-twitter/help/header/header1.png.twimg.1920.png" className="checkout_ad" alt="ad"/>
            {basket?.length === 0 ? (
                <div>
                    <h2>Shopping Cart is Empty!</h2>
                    <hr/>
                </div>
            ):(
                <div>
                    <h2 className="checkout_title">Your Shopping Basket!!</h2>
                    <hr/>
                    {basket?.map(item=>(
                        <CheckoutProduct id={item.id} title={item.title} rating={item.rating} price= {item.price} image={item.image}/>
                    ))}
                    </div>
                
            )}
            </div>
            {basket?.length > 0 && (
            <div className="checkout_right">
                <Subtotal />
            </div>
            )}
        </div>
    )
}

export default Checkout
