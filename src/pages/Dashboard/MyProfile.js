import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { displayName, email } = user;
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()

    const onSubmit = userProfile => {
        console.log('customer detail: ', userProfile)

        const { name, email, mobile, address, city, education } = userProfile;

        const orderDetail = {
            name: name,
            mail: email,
            phone: mobile,
            location: address,
            education: education,
            city: city,


        }
        console.log('customer detail &&: ', orderDetail)


        const url = `https://fast-fjord-70405.herokuapp.com/usersprofile`;
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(orderDetail)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast('User profile updated successfully')

            })
        // navigate('/dashboard')


    }

    return (
        <div className="flex  justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h4 className="  text-3xl text-primary font-bold">USER INFORMATION</h4>

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
                                {/* <span className="label-text">Mobile</span> */}
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
                                {/* <span className="label-text">Address</span> */}
                            </label>
                            <input
                                type="text"
                                placeholder="Your Address"
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
                                {/* <span className="label-text">Your City</span> */}
                            </label>
                            <input
                                type="text"
                                placeholder="Enter City"
                                // min={min_order}
                                // max={available}
                                className="input input-bordered w-full max-w-xs"
                                {...register("city", {
                                    required: {
                                        value: true,
                                        //message: `city must be between ${min_order} to ${available}`
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.city?.type === 'required' && <span className="label-text-alt text-red-500">{errors.city.message}</span>}
                            </label>
                        </div>
                        {/* education */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                {/* <span className="label-text">Your City</span> */}
                            </label>
                            <input
                                type="text"
                                placeholder="Education"
                                className="input input-bordered w-full max-w-xs"
                                {...register("education", {
                                    required: {
                                        value: true,
                                        //message: `city must be between ${min_order} to ${available}`
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.education.message}</span>}
                            </label>
                        </div>

                        <input className='btn w-full max-w-xs text-white' type="submit" value="Submit Order" />


                    </form>



                </div>
            </div>
        </div>
    );
};

export default MyProfile;