import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    // const { product, orderQuantity, price, total } = orders;
    console.log(orders);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/users`)
                .then(res => res.json())
                .then(data => setOrders(data));
        }
    }, [user])

    // const handelCheckout = () => {
    //     // console.log('clicked')
    //     navigate('/checkout');

    // }

    return (
        <div>
            <div className="text-4xl py-10 text-primary">MyOrder</div>

            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>price per Unit </th>
                        <th>total</th>
                        <th>Checkout</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((a, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{a.product}</td>
                            <td>{a.orderQuantity}</td>
                            <td>{a.price}</td>
                            <td>{a.total}/tk</td>
                            <td>
                                {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-secondary'>pay</button></Link>}
                                {(a.price && a.paid) && <div>
                                    <p><span className='text-success'>Paid</span></p>
                                    <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                                </div>}

                            </td>
                        </tr>)
                    }


                </tbody>
            </table>

        </div>
    );
};

export default MyOrder;