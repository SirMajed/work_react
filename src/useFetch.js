import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setData] =  useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        // this function is going to run everytime we render
        const abortController = new AbortController();

        setTimeout(()=>{
            fetch(url, {signal:abortController.signal})
        .then(res => {
            if(!res.ok){
                // Throw an error, because the response is not okay. he is Sick xD
                throw Error('Error occured! Book couldnt be fetched');
            }
            return res.json()
        })
        .then((jsonData)=>{
            setData(jsonData);
            setIsLoading(false);
            setError(null);
        })
        .catch(err =>{
            if (err.name === 'AbortError'){
                console.log('Fetch Aborted');
            } else {
            setIsLoading(false);
            setError(err.message);
             }
        });
        }, 0);

        return ()=> abortController.abort();
    }, [url]);

    return { data, isLoading, error }
}
 
export default useFetch;