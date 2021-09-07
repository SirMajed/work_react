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
            <h1>This is a tset component</h1>
        </div>
    );
}

export default Test;
