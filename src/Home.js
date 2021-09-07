import { useState } from "react";
import { InputLabel, MenuItem, Select, CircularProgress, FormControl, Tooltip } from "@material-ui/core";
import MyAlert from "./Components/MyAlert";
import { Button } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import { CloudUpload } from "@material-ui/icons";
import ResponseCard from "./Components/ResponseCard";
import { Link } from "react-router-dom";
import { qfuntion } from "./Data/QFuntions";
const Home = () => {
  const [selectedFile, setSelectedFile] = useState("");
  const [selectedFunction, setSelectedFunction] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  // const state = useSelector((state)=> state.account);

  const handleChange = (file) => {
    setSelectedFile(file[0]);
    setIsDisabled(false);
  };

  const handleDropDown = (d)=>{
    setSelectedFunction(d);
  }


  // The followin method wll upload the files to server
  const submitFile = async () => {
    
    setIsLoading(true);
      const data = {
        functionName:selectedFunction,
        fileName: selectedFile.name
      };
    
    const result = await qfuntion(data);

    if(result.status === 404){
      setError(result.statusText);
    } else {
      setResponse(result);
    }

    setIsLoading(false);
    
    console.log(result);

  };


  return (
    <div className="App scrollbar-none flex flex-col font-sans mx-auto p-5 md:p-0 ">
      <div className="bg-white shadow-md w-full md:w-5/6 rounded-lg text-center text-justify mx-auto px-4 md:px-8 py-6">
      <div className="first">
        <h1 className="text-gray-600 text-3xl font-bold">1. Select function</h1>

        <Tooltip title="Select which function you want to perform">
        <FormControl  className="text-left ">
        <InputLabel className="mt-1" >Select</InputLabel>
        <Select value={selectedFunction} onChange={(e) => handleDropDown(e.target.value)}  style={{width: '200px'}}   >
          <MenuItem value="Fun1">Fun1</MenuItem>
          <MenuItem value="Fun2">Fun2</MenuItem>
          <MenuItem value="Fun3">Fun3</MenuItem>
          <MenuItem value="Fun4">Fun4</MenuItem>
        </Select>
        </FormControl>
        </Tooltip>

        <hr className="mt-5 mb-2" />
      </div>
      {/* <div className="mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
        {
           functions && functions.map( (fun) => (
                <Card functionName={fun.function_name} id={fun.id} />
            ))
        }
        </div> */}


        <div className="second ">
        <h1 className="text-gray-600 text-3xl font-bold ">2. Choose file</h1>

        <br />
        <form>
          <Tooltip title="Select the function file from your device">
        <Button startIcon={<CloudUpload/>}  variant="contained" component="label">
          {selectedFile.name ?? 'Choose File'}
          <input
            type="file"
            hidden
            
            // value={selectedFile}
            name="file"
            onChange={(e) => handleChange(e.target.files)}
          />
        </Button>
        </Tooltip>
      {/* <p className="mt-1">{selectedFile.name}</p> */}
      </form>
      <hr className="mt-5 mb-2" />

      </div>


      <div className="third">
      <h1 className="text-gray-600 text-3xl font-bold ">3. Upload your file</h1>
      <div className="mt-5">
        {
        isLoading ? <CircularProgress /> :
        <Tooltip title="Send the function file to the server and wait for the response">
        <Button startIcon={<SendIcon/>} disabled={isDisabled} onClick={submitFile} variant="contained" color="primary" component="label" >
          Upload to server
          </Button>
          </Tooltip>
        }
      </div>
      </div>

      </div>
      <div className="flex justify-end mt-3 md:w-5/6 rounded-lg text-center text-justify mx-2 md:mx-auto">
      <Link to="/test">
      <Button
        variant="contained"
        color="primary"
        endIcon={<SendIcon/>}>
        Next
      </Button>
      </Link>
      </div>

        {error && <ResponseCard>
          <div><MyAlert type="error" color="error" message={error}/></div>
          </ResponseCard>}
        
        {response && <ResponseCard>
          <div><MyAlert type="success"  color="info" message={response.data.msg}/></div>

          </ResponseCard>}
        
        
        </div>
  );
};

export default Home;
