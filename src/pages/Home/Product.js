import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const navigate = useNavigate()
    const navigateProductDetails = (id) => {
        navigate(`/product/${id}`)
    }

    const { _id, name, description, imgUrl, price, min_order, available } = product;
    return (
        <div class="drop-shadow-xl card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={imgUrl} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title text-3xl">{name}</h2>
                <div>
                    <p className="text-lg p-4">{description}</p>
                    <p className="text-xl pb-2 ">Min-Order: {min_order}<span className="text-sm"></span></p>
                    <p className="text-xl pb-2">Quantity: {available}<span className="text-sm"></span></p>
                    <p className="text-xl pb-2">Price <span className="text-sm">/Unit</span> : <span className="text-3xl text-yellow-500 ">$</span>{price}</p>
                </div>
                <div class="card-actions">
                    <button onClick={() => navigateProductDetails(_id)} class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;