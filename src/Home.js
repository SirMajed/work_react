import { useState } from "react";
import axios from "axios";
import { InputLabel, MenuItem, Select } from "@material-ui/core";
// import Card from "./Components/Card";
import { Button } from "@material-ui/core";
const Home = () => {
  const [selectedFile, setSelectedFile] = useState("");
  const [selectedFunction, setSelectedFunction] = useState("");

  //   const [functions, setFunctions] = useState(null);
  //   useEffect(() => {
  //     fetch("https://retoolapi.dev/trLdZc/data")
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setFunctions(data);
  //       });
  //   }, []);

  const handleChange = (file) => {
    setSelectedFile(file[0]);
  };

  const handleDropDown = (d)=>{
    setSelectedFunction(d);
  }


  // The followin method wll upload the files to server
  const submitFile = (e) => {
    const data = {
      'functionName': selectedFunction,
      'fileName': selectedFile.name
  }
    e.preventDefault();
    // const fData = new FormData();
    // fData.append("file", selectedFile);
    axios.post("http://127.0.0.1:8000/api/function", data).then((res) => {
      console.log("RESPONSE -->> ", res);
    });
  };

  // const fileHandler = (e)=>{
  //     // console.log(e.target.files[0]);
  //     setSelectedFile(e.target.files[0]);
  //     console.log(selectedFile);
  // }

  // const uploadHandler = ()=>{
  //     const fData = new FormData();
  //     fData.append('function', selectedFile);
  //     axios.post('http://127.0.0.1:8000/api/function', fData)
  //     .then(res => {
  //       console.log('RESPONSE -->> ', res);
  //     });

  // }

  return (
    <div className="App scrollbar-none flex flex-col font-sans mx-auto p-5 md:p-0">
      <div className="first">
        <h1 className="text-gray-600 text-3xl font-bold ">1. Select function</h1>
        <br />
        <InputLabel className="w-3/4" id="label">
          Function
        </InputLabel>
        <Select onChange={(e) => handleDropDown(e.target.value)}  name="selectedFunction" style={{width: '200px'}}   >
          <MenuItem value="Fun1">Fun1</MenuItem>
          <MenuItem value="Fun2">Fun2</MenuItem>
          <MenuItem value="Fun3">Fun3</MenuItem>
          <MenuItem value="Fun4">Fun4</MenuItem>
        </Select>
        <hr className="mt-5 mb-2" />
      </div>
      {/* <div className="mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
        {
           functions && functions.map( (fun) => (
                <Card functionName={fun.function_name} id={fun.id} />
            ))
        }
        </div> */}
        <div className="second">
        <h1 className="text-gray-600 text-3xl font-bold ">2. Choose file</h1>

        <br />
        <form onSubmit={submitFile}>
        <Button variant="contained" component="label">
          Choose File
          <input
            type="file"
            hidden
            // value={selectedFile}
            name="file"
            onChange={(e) => handleChange(e.target.files)}
          />
        </Button>
      </form>
      <hr className="mt-5 mb-2" />

      </div>
      {/* <span className="ml-2 mr-2">{selectedFile}</span> */}
      <div className="third">
      <h1 className="text-gray-600 text-3xl font-bold ">3. Upload your file</h1>
      <div className="mt-5">
        <Button
          onClick={submitFile}
          variant="contained"
          color="primary"
          component="label"
        >
          Upload to server
        </Button>
      </div>

      </div>

    </div>
  );
};

export default Home;
