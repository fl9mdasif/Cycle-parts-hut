import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const { displayName, email } = user;
    const navigate = useNavigate()


    // submit form handler

    const onSubmit = (reviewData) => {
        const { name, review } = reviewData;

        console.log(reviewData)

        const data = {
            name: name,
            review: review
        }
        console.log('review detail &&: ', reviewData)

        const url = `http://localhost:5000/reviews`;
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast('Your review added to Reviews Page')
            })
        navigate('/home')


    }
    return (
        <div>
            <div className="text-4xl text-primary">Add review</div>
            <div className="">
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

                    {/* Input review */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Review</span>
                        </label>
                        <textarea className=" h-42 border-4 " {...register("review", {})} />
                        <label className="label">
                            {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review.message}</span>}
                        </label>
                    </div>




                    <input className='btn w-full max-w-xs text-white' type="submit" value="Submit Order" />


                </form>
            </div>
        </div>
    );
};

export default AddReview;