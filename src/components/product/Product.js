import React from 'react'
import "./Product.css"
import { FcRating } from 'react-icons/fc';
import { useStateValue } from "../stateProvider/StateProvider"

function Product({id, title, price, rating, image}) {
    const [{basket}, dispatch] = useStateValue();
    // console.log('This is the basket', basket)
    const addToBasket = () => {
        //Add item to basket...
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        })
    };

    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((index, i) => (
                        <i key={i}><FcRating/></i>
                    ))} 
                </div>
            </div>
            <img className='product__image' src={image} alt=""/>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
