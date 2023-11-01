import axios from 'axios';

export default axios.create({
    //provides base address of api endpoints
    baseURL:'https://9c96-103-106-239-104.ap.ngrok.io/',
    //needed for client http requests to not be blocked
    headers: {"ngrok-skip-browser-warning": "true"}
});