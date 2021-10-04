import { useState } from 'react';
import MyAlert from '../../Components/MyAlert';
import ResponseCard from './Components/ResponseCard';
import SelectFunction from './Components/SelectFunction';
import UploadFunction from './Components/UploadFunction';
import SendFunction from './Components/SendFunction';
import SelectFunctionHook from './Components/SelectFunctionHook';
import SelectFileHook from './Components/SelectFileHook';

import axios from 'axios';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');

  const { selectedFunction, handleDropDown } = SelectFunctionHook();
  const { selectedFile, handleChange, isDisabled } = SelectFileHook();

  const cancelTokenSource = axios.CancelToken.source();
  const url = process.env.REACT_APP_SERVER_ENDPOINT;

  const data = {
    functionName: selectedFunction,
    fileName: selectedFile.name,
  };

  const submitFile = async () => {
    setError('');
    setResponse(undefined);
    setIsLoading(true);

    try {
      if (data.fileName === undefined || data.functionName === '') {
        return setError("Please select function and upload file, Don't leave them empty!");
      }
      const result = await axios.post(`${url}api/function`, data, {
        cancelToken: cancelTokenSource.token
      });
      setResponse(result);
    } catch (error) {
      if (error.response) {
        setError(error.message);
      } else if (!error.response) {
        setError('Connection refused');
      } else setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  // setIsLoading(true);

  //   const result = await qfuntion(data, cancelTokenSource);
  //   console.log(result);
  //   if (result.status !== 200) {
  //     setError(result.statusText);
  //   } else if (result.data === null) {
  //     setError('Null, the server didnt send anything');
  //   } else {
  //     setResponse(result);
  //   }
  //   setIsLoading(false);

  const abortConnection = () => {
    cancelTokenSource.cancel();
    
  };

  return (
    <div className="App scrollbar-none flex flex-col font-sans mx-auto p-5 md:p-0 ">
      <div className="bg-white shadow-md w-full md:w-5/6 rounded-lg text-center text-justify mx-auto px-4 md:px-8 py-6">
        <SelectFunction selectedFunction={selectedFunction} handleD={handleDropDown} />

        <UploadFunction selectedFileName={selectedFile.name} handleChange={handleChange} />

        <SendFunction killServer={abortConnection} handleClick={submitFile} isDisabled={isDisabled} isLoading={isLoading} />
      </div>

      {response && (
        <ResponseCard>
          <div>
            <MyAlert type="success" color="info" message={response.status === 200 && 'File has been created' + ' - ' + response.data.fileName} />
          </div>
        </ResponseCard>
      )}

      {error && (
        <ResponseCard>
          <div>
            <MyAlert type="error" color="error" message={error} />
          </div>
        </ResponseCard>
      )}
    </div>
  );
};

export default Home;
