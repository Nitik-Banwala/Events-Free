import React from 'react';

const Button = ({ text, style }) => {
    return (
        <button
            className={`cursor-pointer ${style} hover:scale-[1.04] transition-transform duration-200`}
        >
            {text}
        </button>
    );
};

export default Button;



