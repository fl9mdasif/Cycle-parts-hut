import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';

const Purchase = () => {
    const { productID } = useParams();
    const navigate = useNavigate()
    //User Information
    const [user] = useAuthState(auth);
    const { displayName, email } = user;

    //Product Fetch
    const [product, setProduct] = useState([]);
    const { _id, name, imgUrl, description, min_order, available, price } = product;

    useEffect(() => {
        fetch(`http://localhost:5000/product/${productID}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    //Form Submit
    const { register, formState: { errors }, handleSubmit } = useForm();

    // send form data to mongoDB userCollection
    const onSubmit = orderDetails => {
        // console.log('customer detail: ', orderDetails)

        const { name, email, mobile, address, quantity } = orderDetails;
        const totalPrice = price * quantity;

        const orderDetail = {
            name: name,
            product: product.name,
            mail: email,
            phone: mobile,
            location: address,
            orderQuantity: quantity,
            price: price,
            total: totalPrice

        }
        console.log('customer detail &&: ', orderDetail)


        const url = `http://localhost:5000/users`;
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(orderDetail)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast('Product added to Dashboard Page')

            })
        navigate('/dashboard')


    }



    return (
        <div className='my-20 grid lg:grid-cols-2 gap-0'>
            <div className="card w-96 bg-base-100 mx-auto shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={imgUrl} alt="Hand Tools" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-justify'>{description}</p>
                    <p className='font-bold text-lg'>Price: ${price}</p>
                    <p className='font-bold text-yellow-600'>Minimum Order: {min_order} PCS</p>
                    <p className='font-bold text-green-600'>Stock Available: {available} PCS</p>
                </div>
            </div>
            <div className='flex h-screen justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">User Information</h2>

                        {/* input form */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Input Name */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={displayName}
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>

                            {/* Input Email */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    value={email}
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>

                            {/* Input Mobile */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Mobile</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Your mobile Number"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("mobile", {
                                        required: {
                                            value: true,
                                            message: 'Mobile is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.mobile?.type === 'required' && <span className="label-text-alt text-red-500">{errors.mobile.message}</span>}
                                </label>
                            </div>
                            {/* Input Address */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Shipping Address"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: 'Address is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                                </label>
                            </div>

                            {/* Input Quantity */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Purchase Quantity</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Purchase Quantity"
                                    min={min_order}
                                    max={available}
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("quantity", {
                                        required: {
                                            value: true,
                                            message: `Quantity must be between ${min_order} to ${available}`
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                </label>
                            </div>

                            <input className='btn w-full max-w-xs text-white' type="submit" value="Submit Order" />
                            <ToastContainer></ToastContainer>

                        </form>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;