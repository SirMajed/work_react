import client from "./Client";

const uri = "/api/functiosn"; 

const qfuntion = async (data) => {
    if (data === null) {
        return "Data is null"; 
    }
    try {
        const result = await client.post(uri, data);
        return result;

    } catch (err) {
        return err.response; 
    }
    
}


export { qfuntion }; 