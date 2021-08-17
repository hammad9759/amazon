// rfc
import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import data from '../data';
// import Rating from "./Rating"


export default function ProductScreen(props) {
    const product = data.products.find(x => x._id === props.match.params.id);
    if (!product) {
        return (
            <div> product not found</div>
        )
    }
    return (
        <div>
            <Link to="/">Back to results</Link>
            <div className="row">
                <div className="col-2">
                    <img className="large" src={product.image} alt={product.name}></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating
                                rating={product.rating}
                                numReviewss={product.numReviews}
                            ></Rating>
                        </li>
                        <li>
                            Price : ${product.price}
                        </li>
                        <li>
                            Description :
                            <p>{product.description}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price : </div>
                                    <div className="price">$ {product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Status : </div>
                                    <div className="">
                                        {product.countInStock > 0 ? (
                                            <span className="success"> In Stock</span>
                                        ) : (
                                            <span className="danger"> Out of Stock</span>
                                        )}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block">Add to Cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    )
}
