import client from "./Client";

const uri = "/api/function"; 

const qfuntion = async (data, cancelTokenSource) => {
    if(data.fileName === undefined && data.functionName === ''){
        return "No data has been selected, please choose the function the the file path";
    }
    try {
        const result = await client.post(uri, data, {
            cancelToken: cancelTokenSource.token
        });
        return result;

    } catch (err) {
        return err.response; 
    }
    
}


export { qfuntion }; 