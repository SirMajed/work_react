import React from 'react';

const ResponseCard = (props) => {
    return (
        <div className="response mt-7 mx-auto bg-white shadow-md rounded-lg px-4 py-4 w-full md:w-5/6">
        <h1 className="text-gray-600 text-3xl font-bold mt-2 mb-2">Response:</h1>
        {/* <div className="mb-2"><code className="text-xs text-red-400">from: {props.server}</code></div> */}
        {props.children}
        </div>
    );
}

export default ResponseCard;
