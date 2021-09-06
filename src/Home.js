import { useState } from "react";
import axios from "axios";
import { InputLabel, MenuItem, Select, CircularProgress, FormControl } from "@material-ui/core";
import MyAlert from "./Components/MyAlert";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import SendIcon from '@material-ui/icons/Send';
import { CloudUpload } from "@material-ui/icons";
const Home = () => {
  const [selectedFile, setSelectedFile] = useState("");
  const [selectedFunction, setSelectedFunction] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  
  const state = useSelector((state)=> state.account);

  const handleChange = (file) => {
    setSelectedFile(file[0]);
    setIsDisabled(false);
  };

  const handleDropDown = (d)=>{
    setSelectedFunction(d);
  }


  // The followin method wll upload the files to server
  const submitFile = (e) => {
    e.preventDefault();

    setIsLoading(true);

      const data = {
        'functionName': selectedFunction,
        'fileName': selectedFile.name,
        'file': selectedFile
    }
      setIsLoading(true);

      // const fData = new FormData();
      // fData.append("file", selectedFile);
      axios.post("http://127.0.0.1:8000/api/function", data)
      .then((res) => {
       return res;  
      // console.log("Server Says: ", res);
      }).then((data)=>{

        setResponse(data);
        setIsLoading(false);
        console.log(data);
      });

  };


  return (
    <div className="App scrollbar-none flex flex-col font-sans mx-auto p-5 md:p-0 ">
      <div className="bg-white shadow-md w-full md:w-5/6 rounded-lg text-center text-justify mx-auto px-4 md:px-8 py-6">
      <div className="first">
        <h1 className="text-gray-600 text-3xl font-bold">1. Select function</h1>

        <FormControl  className="text-left ">
        <InputLabel className="mt-1" >Select</InputLabel>

        <Select  onChange={(e) => handleDropDown(e.target.value)}  name="selectedFunction" style={{width: '200px'}}   >
          <MenuItem value="Fun1">Fun1</MenuItem>
          <MenuItem value="Fun2">Fun2</MenuItem>
          <MenuItem value="Fun3">Fun3</MenuItem>
          <MenuItem value="Fun4">Fun4</MenuItem>
        </Select>
        </FormControl>

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
      {/* <p className="mt-1">{selectedFile.name}</p> */}
      </form>
      <hr className="mt-5 mb-2" />

      </div>


      <div className="third">
      <h1 className="text-gray-600 text-3xl font-bold ">3. Upload your file</h1>
      <div className="mt-5">
        {isLoading ? <CircularProgress /> : <Button startIcon={<SendIcon/>} disabled={isDisabled} onClick={submitFile} variant="contained" color="primary" component="label" > Upload to server </Button>}
      </div>
      </div>

      </div>

      {response && <div className="response mt-10 mx-auto bg-white shadow-md rounded-lg px-4 py-4 w-full md:w-5/6">
        <h1 className="text-gray-600 text-3xl font-bold mt-2 mb-2">Response:</h1>
        
        <div>
          {/* Todo: add Error Alert */}
        <MyAlert message={response.data.msg + ' - File: ' + response.data.fileName + " - Function: " + response.data.functionName} type="success" />
        </div>
        
        
        </div>}
    </div>
  );
};

export default Home;
