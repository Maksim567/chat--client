import axios from "axios";

const serverUrl = 'https://3e74bafef58d.ngrok.io/';

const axiosClient = () => {
    const instance = axios.create({
        responseType: "JSON",
        baseURL: serverUrl,
    });
    return instance;
}
export {axiosClient};