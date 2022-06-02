import { StarIcon } from '@heroicons/react/solid';
import React from 'react';

const Review = ({ review }) => {
    // const { name, review } = review;
    console.log('reviewpage', review)
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl" >
            <div className="card-body" >
                <p>{review.review}</p>
                <div className="flex items-center my-3" >
                    <div className="avatar" >
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5" >
                            <img src={review.imgLink} alt="" />
                        </div >
                    </div >
                    <div>
                        <h4 className='text-xl'>{review.name}</h4>
                        <div className='w-10 grid grid-cols-2'>
                            <div className='text-xl'>{review.ratings}</div>
                            <StarIcon className="w-8 block  text-yellow-500 ">
                            </StarIcon>
                        </div>

                    </div >
                </div >
            </div >
        </div >
    );
};

export default Review;