// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import useFetch from "./useFetch";
// import { Button } from "@material-ui/core";
// const FunctionDetail = () => {

//     const { id } = useParams();
//     const {data: fun, isLoading, error} = useFetch('https://retoolapi.dev/trLdZc/data/' + id);

//     function fileHandler(){
//         alert("test");
//     }

//     return (
//         <div>
//             {fun && <div><h1 className="text-gray-600 text-4xl font-bold ">{fun.function_name}</h1> <br /></div>}
//             <p>Choose file and select the input</p>
//             <Button
//             variant="contained"
//             component="label"
//             >
//             Upload File
//             <input
//                 type="file"
//                 name="file"
//                 onClick={()=>{
//                     this.fileHandler()
//                 }}
//                 hidden
//             />
//             </Button>
//         </div>
//     );
// }
 
// export default FunctionDetail;