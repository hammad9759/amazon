// rfc
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Product from '../components/Product';
import LodingBox from '../components/LodingBox';
import MessageBox from '../components/MessageBox';

export default function HomeScreen() {
    const [products, setProducts] = useState([]);
    const [loding, setLoding] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchdata = async () => {
            try {
                setLoding(true);
                const { data } = await axios.get('/api/products');
                setLoding(false);
                setProducts(data);
            } catch (err) {
                setError(err.message);
                setLoding(false);
            }
        };
        fetchdata();
    }, []);
    return (
        <div>
            {loding ? ( 
                <LodingBox></LodingBox>
            ) :  error ? ( 
                <MessageBox variant="danger">{error}</MessageBox>
            ): (
                <div className="content">
                    <ul className="products">
                        {products.map((product) => (
                            <Product key={product._id} product={product}></Product>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
