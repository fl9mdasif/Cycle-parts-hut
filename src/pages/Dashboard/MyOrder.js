import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
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

    const handleSignOut = () => {
        console.log('clicked')
    }

    return (
        <div>
            <div className="text-4xl text-primary">MyOrder</div>

            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>price per Unit </th>
                        <th>total</th>
                        <th>Checkbox</th>
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
                                <button onClick={handleSignOut} className="btn btn-primary border-none shadow-md bg-gradient-to-r from-secondary to-primary"> Checkout</button>

                            </td>
                        </tr>)
                    }


                </tbody>
            </table>

        </div>
    );
};

export default MyOrder;