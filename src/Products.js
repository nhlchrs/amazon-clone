import React from 'react'
import './Products.css'
import { useStateValue } from './StateProvider'
function Products({id, title , image, rating, price}) {
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket =()=>{
        dispatch({
            type:'ADD_TO_BASKET',
            item: {
                id:id,
                title:title,
                image:image,
                price,rating            
            }
        })
    }
    
    return (
        <div className="products">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((i=1)=>(
                        <span role="image">&#11088;</span>
                    ))}
                </div>
           </div>
                <img classname="products_image" src={image} alt="img"/>
                <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Products
