import { useState, useEffect } from 'react';
import client from './Client';
const Api = (config) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async (params) => {
      try {
        const result = await client.request(params);
        setResponse(result.data);
      } catch (error) {
        if (!error.response) {
          setError('Network error happened');
        } else {
          console.log(error);
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData(config);
  }, []); // execute once only

  return { response, error, loading };
};

export default Api;
