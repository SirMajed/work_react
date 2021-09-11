import client from "./Client";

const uri = "/api/function"; 

const qfuntion = async (data) => {
    if (data === null) {
        return "Data is null"; 
    }
    try {
        // const dataString = JSON.stringify(data);
        //{"body":data}
        const result = await client.post(uri, data);
        return result;

    } catch (err) {
        return err.response; 
    }
    
}


export { qfuntion }; 