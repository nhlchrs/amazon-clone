import React from 'react'
import  "./CheckoutProducts.css";
import { useStateValue } from './StateProvider';
function CheckoutProduct({id, title,rating, price, image}) {
    const[{basket},dispatch]= useStateValue();
    const removeFromBasket=()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })
    }
    return (
        <div className="checkout_products">
            <img className="checkoutProduct_images" src={image} alt="img"/>
            
            <div className="CheckoutProduct_info">
                <p className="checkoutproduct_title">{title}</p>
                <p className="checkout_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutproduct_rating">
                {Array(rating).fill().map((_)=>(
                <p>&#11088;</p>
            ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
            

        </div>
    )
}

export default CheckoutProduct
