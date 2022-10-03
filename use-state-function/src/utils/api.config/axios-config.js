import axios from 'axios';
import { url } from '../constants/Constants';

const request = axios.create({
    baseURL: url
})

request.interceptors.request.use(function(config){
    config.headers.contentType = '*';
    config.headers.allowAccessControlOrigin =""

    return config;
})


export { request };