import React from 'react';
const CardInfo = ({ img, title, colors }) => {

    return (

        <div className={`text-white items-center sm:w-75  card   lg:card-side bg-base-100 shadow-xl ${colors}`}>
            <figure className="py-4 pl-5"><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>

            </div >
        </div >

    );
};

export default CardInfo;