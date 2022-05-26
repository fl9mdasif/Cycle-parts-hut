import React, { useEffect, useState } from 'react';
import Product from './Product';

const ToolsOrParts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fast-fjord-70405.herokuapp.com/product')
            .then(result => result.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className=" container mx-auto w-100 py-10">
            <h1 className="py-10 font-bold text-center text-primary sm:text-2xl md:text-4xl lg:text-5xl">TOOLS / PARTS</h1>

            <div className="m-3 justify-items-center  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>

        </div>
    );
};

export default ToolsOrParts;