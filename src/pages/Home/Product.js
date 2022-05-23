import React from 'react';

const Product = ({ product }) => {
    const { name, description, imgUrl, price, minquantity, availablequantity } = product;
    return (
        <div class="drop-shadow-xl card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={imgUrl} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title text-3xl">{name}</h2>
                <div>
                    <p className="text-lg p-4">{description}</p>
                    <p className="text-2xl pb-2 ">Min-Order: {minquantity}</p>
                    <p className="text-2xl pb-2">Quantity: {availablequantity}</p>
                    <p className="text-2xl pb-2">Price Per Unit: <span className="text-3xl text-primary ">{price}</span></p>
                </div>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;