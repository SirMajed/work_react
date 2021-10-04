import { useState } from 'react';
import MyAlert from '../../Components/MyAlert';
import ResponseCard from './Components/ResponseCard';
import { qfuntion } from '../../Data/QFuntions';
import SelectFunction from './Components/SelectFunction';
import UploadFunction from './Components/UploadFunction';
import SendFunction from './Components/SendFunction';
import SelectFunctionHook from './Components/SelectFunctionHook';
import SelectFileHook from './Components/SelectFileHook';
// import { useSelector } from "react-redux";
// import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';

const Home = () => {
  // const counter = useSelector(state => state.counter);

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const { selectedFunction, handleDropDown } = SelectFunctionHook();
  const { selectedFile, handleChange, isDisabled, disableBtn } = SelectFileHook();

  const cancelTokenSource = axios.CancelToken.source();
  const submitFile = () => {

    setIsLoading(true);

    const data = {
      functionName: selectedFunction,
      fileName: selectedFile.name,
    };

    setTimeout(async () => {
      const result = await qfuntion(data, cancelTokenSource);
      console.log(result);
      if (result.status !== 200) {
        setError(result.statusText);
      } else if (result.data === null) {
        setError('Null, the server didnt send anything');
      } else {
        setResponse(result);
      }
      setIsLoading(false);
    }, 4000);
  };

  const abortConnection = () => {
    alert('test');
    cancelTokenSource.cancel();
  }

  return (
    <div className="App scrollbar-none flex flex-col font-sans mx-auto p-5 md:p-0 ">
      <div className="bg-white shadow-md w-full md:w-5/6 rounded-lg text-center text-justify mx-auto px-4 md:px-8 py-6">
        <SelectFunction selectedFunction={selectedFunction} handleD={handleDropDown} />

        <UploadFunction selectedFileName={selectedFile.name} handleChange={handleChange} />

        <SendFunction killServer={abortConnection} handleClick={submitFile} isDisabled={isDisabled} isLoading={isLoading} />
      </div>
      {error && (
        <ResponseCard>
          <div>
            <MyAlert type="error" color="error" message={error} />
          </div>
        </ResponseCard>
      )}

      {response && (
        <ResponseCard>
          <div>
            <MyAlert type="success" color="info" message={response.status === 200 && 'File has been created'} />
          </div>
        </ResponseCard>
      )}
    </div>
  );
};

export default Home;
