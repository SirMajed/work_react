import { useState } from 'react';

const SelectFunctionHook = () => {
    const [selectedFunction, setSelectedFunction] = useState("");
    const handleDropDown = (d)=>{
        setSelectedFunction(d);
      }


    return {selectedFunction, handleDropDown};
}

export default SelectFunctionHook;
