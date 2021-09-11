import { useState } from "react";
import MyAlert from "../../Components/MyAlert";
import ResponseCard from "./Components/ResponseCard";
import { qfuntion } from "../../Data/QFuntions";
import SelectFunction from "./Components/SelectFunction";
import UploadFunction from "./Components/UploadFunction";
import SendFunction from "./Components/SendFunction";
import SelectFunctionHook from "./Components/SelectFunctionHook";
import SelectFileHook from "./Components/SelectFileHook";
// import { useSelector } from "react-redux";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const Home = () => {
  // const counter = useSelector(state => state.counter);

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const {selectedFunction, handleDropDown} = SelectFunctionHook();
  const {selectedFile, handleChange, isDisabled, disableBtn} = SelectFileHook();
  
  const [captchaValue, setCaptchaValue] = useState("");



  const submitFile = async () => {
    
    setIsLoading(true);
      const data = {
        functionName:selectedFunction,
        fileName: selectedFile.name,
      };
    
    const result = await qfuntion(data);

    if(result.status !== 200){
      setError(result.status + ", " + result.statusText);
    } else if (result.data === null){
      setError("Null, the server didnt send anything");
    }
    else {
      setResponse(result);
    }

    setIsLoading(false);
    disableBtn();
    
    console.log(result);

  };

  function onChange(value) {
    setCaptchaValue(value);
    const data = {
      secret: '6Lft8lwcAAAAAE5LMSbcu7QmgRx5qCdi9Ak01wi2',
      response: value
    };
    axios.post('https://www.google.com/recaptcha/api/siteverify',data)
    .then(res => console.log(res));
  }

  return (
    <div className="App scrollbar-none flex flex-col font-sans mx-auto p-5 md:p-0 ">
      <div className="bg-white shadow-md w-full md:w-5/6 rounded-lg text-center text-justify mx-auto px-4 md:px-8 py-6">

        

        <SelectFunction selectedFunction={selectedFunction} handleD={handleDropDown}/>

        <UploadFunction selectedFileName={selectedFile.name} handleChange={handleChange} />
        
        <SendFunction handleClick={submitFile} isDisabled={isDisabled} isLoading={isLoading} />

        <ReCAPTCHA 
          hl="en"
          className="mt-5 "
          sitekey="6Lft8lwcAAAAAKvYc8SiA4fBNmKO8ZICBITYqJLu"
          onChange={onChange}
        />

        <p className="mt-4">{captchaValue}</p>


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
