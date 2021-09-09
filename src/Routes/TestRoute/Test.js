import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
const Test = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);

    const increment = () => {
        dispatch({
            type:"increment"
        });
    };

    const decrement = () => {
        dispatch({
            type:"decrement"
        });
    };


    return (
        <div>
        <div className="bg-white shadow-md rounded p-4 h-72">
            <h1 className="font-black text-4xl text-gray-200">Examples goes here</h1>
            <div className="h-px bg-gray-100 mt-3"/>
            <p>{counter}</p>
            
            <div className="flex space-x-3">
            <button onClick={increment} className="bg-red-500 text-white px-3 py-1 rounded-lg">+</button>
            <button onClick={decrement} className="bg-red-500 text-white px-4 py-1 rounded-lg">-</button>
            </div>

        </div>
            <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-4 text-center">
                    <div className="bg-white shadow-md rounded h-40 p-4 ">
                    <h1 className="font-black text-1xl text-gray-200">Some data tables...</h1>
                    </div>

                    <div className="bg-white shadow-md rounded h-40 p-4">
                    <h1 className="font-black text-1xl text-gray-200">Some data tables...</h1>

                    </div>
            </div>
            </div>
    );
}

export default Test;
