import client from "./Client";
const SendRequest = (method, uri, data) => {
    
    return client.method(urlPath, data)
      .then((res) => res)
      .catch((err) => {
          if (err.response) {
             /* 
               The request was made and the server responded with a status code
               that falls out of the range of 2xx
             */
             throw err.response;
          } else if (err.request) {
              // Client never received a response, or request never left
              throw err.request;
          } else {
              // Something happened in setting up the request that triggered an Error
              throw error.message;
          }
      });
}

export { SendRequest };