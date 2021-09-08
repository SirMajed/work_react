import { useEffect } from 'react';
import React from 'react';

const Test = () => {
    useEffect(() => {
        const user = {
            name:'Majed',
            address: {
                'country':"KSA",
                'city': "Jeddah"
            }

        };

        const newUser = {...user,name:"Saleh",};
        console.log(user);
        console.log("___ NEW ___");
        console.log(newUser);
    });
    return (
        <div>
        <div className="bg-white shadow-md rounded p-4 h-72">
            <h1 className="font-black text-4xl text-gray-200">Examples goes here</h1>
            <div className="h-px bg-gray-100 mt-3"/>

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
