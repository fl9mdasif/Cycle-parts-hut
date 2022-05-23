import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button className="btn text-white btn-secondary bg-gradient-to-r from-secondary to-primary">{children}</button>
        </div >
    );
};

export default PrimaryButton;