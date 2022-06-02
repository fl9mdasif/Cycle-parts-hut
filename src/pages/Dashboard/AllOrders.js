import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AllOrders = () => {

    const [AllOrders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`https://fast-fjord-70405.herokuapp.com/users`)
                .then(res => res.json())
                .then(data => setOrders(data));
        }
    }, [user]);


    const manageProductToDelete = (id) => {
        const proceed = window.confirm('Are you sure to delete product');
        if (proceed) {
            const url = `https://fast-fjord-70405.herokuapp.com/users/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    //const remaining = orders.filter(order => order._id !== id)
                    setOrders(data)
                    toast('product deleted from ALL order');
                })
        }
    };



    return (
        <div>
            <div className="py-10 font-bold text-center text-primary sm:text-2xl md:text-4xl lg:text-5xl">MY ORDERS</div>

            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>price per Unit </th>
                        <th>total</th>
                        <th>Checkout</th>
                        <th>Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        AllOrders.map((a, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{a.product}</td>
                            <td>{a.orderQuantity}</td>
                            <td>{a.price}</td>
                            <td>{a.total} $</td>
                            <td>
                                {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-secondary'>pay</button></Link>}
                                {(a.price && a.paid) && <div>
                                    <p><span className='text-success'>Paid</span></p>
                                    <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                                </div>}

                            </td>
                            <td><button onClick={() => manageProductToDelete(a._id)} className='btn btn-xs text-white bg-red-600'>Delete</button></td>
                        </tr>)
                    }


                </tbody>
            </table>

        </div>
    );
};

export default AllOrders;