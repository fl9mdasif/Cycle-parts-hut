import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

const ManageProduct = () => {
    // const navigate = useNavigate()
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fast-fjord-70405.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    // Delete Single Shoe
    const manageProductToDelete = (id) => {
        const proceed = window.confirm('Are you sure to delete product');
        if (proceed) {
            const url = `https://fast-fjord-70405.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    products(data)
                    toast('product deleted from my order');
                })
        }
    };
    return (
        <div className="overflow-x-auto">
            <div className="py-10 font-bold text-center text-primary sm:text-2xl md:text-4xl lg:text-5xl">MANAGE PRODUCT</div>

            <table className="table table-compact w-full mx-auto text-center">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Min. Order Quantity</th>
                        <th>Price per unit </th>
                        <th>Available Quantity</th>
                        <th>Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) =>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.min_order}</td>
                                <td>{product.price}</td>
                                <td>{product.available}</td>
                                <td><button onClick={() => manageProductToDelete(product._id)} className='btn text-white btn-xs bg-red-600'>Delete</button></td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProduct;