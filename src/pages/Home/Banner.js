import React from 'react';
import cycle from '../../img/banner.jpg';
import PrimaryButton from '../../pages/Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className=" hero  min-h-screen">
            <div className="hero-content text-start flex-col lg:flex-row-reverse">
                <img src={cycle} alt="" className="max-w-sm  rounded-lg shadow-2xl" />
                <div className=" text-left py-4 mx-10">
                    <h1 className="text-5xl  font-bold py-3">Get your cycle parts </h1>
                    <p className="py-6"> Established in 1994, "Cycle Parts BD" has made a name for itself in the list of top suppliers of bicycle spare parts, complete bicycle, motorcycle parts, fasteners & many more in Bangladesh.</p>
                    <PrimaryButton >Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;