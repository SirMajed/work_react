import axios from "axios";

const url = process.env.REACT_APP_SERVER_ENDPOINT;

const client = axios.create({
    baseURL: url,
  });

  export default client;