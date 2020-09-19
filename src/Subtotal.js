import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import {BasketSubtotal} from './reducer'
function Subtotal() {
    const [{basket}] = useStateValue();
    console.log(BasketSubtotal(basket));  
    return (
        <div className="subtotal">
            <h1>Subtotal</h1>
            <CurrencyFormat
            renderText= {(value)=>(
                <>
                <p>Subtotal ({basket?.length} items) : <strong>{`${value}`}</strong>  </p>
                <small className="subtoal_gift">
                    <input type="checkbox"/> This order contains Gift.
                </small>
                </>
            )}
                value = {BasketSubtotal(basket)}
                displayType={"text"}
                thousandSeprator={true}
                decimalScale={2}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
