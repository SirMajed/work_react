import { useState } from 'react';

const SelectFileHook = () => {
    const [selectedFile, setSelectedFile] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);

    const handleChange = (file) => {
        setSelectedFile(file[0]);
        setIsDisabled(false);
      };
      
      const disableBtn = () =>{
        return setIsDisabled(true);
      }
    
    return {selectedFile, handleChange, isDisabled, disableBtn};
}

export default SelectFileHook;
