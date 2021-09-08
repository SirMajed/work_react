import { useState } from "react";
import MyAlert from "../../Components/MyAlert";
import ResponseCard from "./Components/ResponseCard";
import { qfuntion } from "../../Data/QFuntions";
import SelectFunction from "./Components/SelectFunction";
import UploadFunction from "./Components/UploadFunction";
import SendFunction from "./Components/SendFunction";
import SelectFunctionHook from "./Components/SelectFunctionHook";
import SelectFileHook from "./Components/SelectFileHook";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const {selectedFunction, handleDropDown} = SelectFunctionHook();
  const {selectedFile, handleChange, isDisabled, disableBtn} = SelectFileHook();
  
  const submitFile = async () => {
    
    setIsLoading(true);
      const data = {
        functionName:selectedFunction,
        fileName: selectedFile.name,
      };
    
    const result = await qfuntion(data);

    if(result.status !== 200){
      setError(result.statusText);
    } else {
      setResponse(result);
    }

    setIsLoading(false);
    disableBtn();
    
    console.log(result);

  };

  return (
    <div className="App scrollbar-none flex flex-col font-sans mx-auto p-5 md:p-0 ">
      <div className="bg-white shadow-md w-full md:w-5/6 rounded-lg text-center text-justify mx-auto px-4 md:px-8 py-6">

        

        <SelectFunction selectedFunction={selectedFunction} handleD={handleDropDown}/>

        <UploadFunction selectedFileName={selectedFile.name} handleChange={handleChange} />

        <SendFunction handleClick={submitFile} isDisabled={isDisabled} isLoading={isLoading} />

      </div>
        {error && <ResponseCard>
          <div><MyAlert type="error" color="error" message={error}/></div>
          </ResponseCard>}
        
        {response && <ResponseCard>
          <div><MyAlert type="success"  color="info" message={response.statusText + ", "+ response.data.msg}/></div>
          </ResponseCard>}
        
        
        </div>
  );
};

export default Home;
