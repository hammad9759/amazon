import React from 'react'
import Rating from "./Rating"

export default function product(props) {
    const {product} = props;
    return (
        <li key={product._id}>
            <div className="produt">
                <a href={`/product/${product._id}`}>
                    <img className="product-image" src={product.image} alt={product.name} />
                </a>
                <div className="product-name">
                    <a href={`/product/${product._id}`}>
                        {product.name}
                    </a>
                </div>
                <div className="product-brand"> {product.price} </div>
                <Rating 
                    rating = {product.rating}
                    numReviews = {product.numReviews }
                    >
                </Rating>
                <div className="product-price">$ {product.price}</div>
            </div>
        </li>
    )
}