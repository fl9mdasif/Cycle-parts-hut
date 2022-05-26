import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
// import Loading from '../Shared/Loading';

const Payment = () => {
    const { id } = useParams();
    const { users, setUsers } = useState();

    useEffect(() => {
        fetch(`https://fast-fjord-70405.herokuapp.com/users/${id}`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);
    console.log(users)


    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p> id:{id}</p>

                    <p> this is payment { }users.email</p>
                    {/* <p className="text-success font-bold">Hello, {appointment.patientName}</p>
                    <h2 class="card-title">Please Pay for {appointment.treatment}</h2>
                    <p>Your Appointment: <span className='text-orange-700'>{appointment.date}</span> at {appointment.slot}</p>
                    <p>Please pay: ${appointment.price}</p> */}
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    {/* <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements> */}
                </div>
            </div>
        </div>
    );

}
export default Payment;