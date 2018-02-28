import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://shop-7137d.firebaseio.com/',
    // timeout: 10000,
    // // withCredentials: true,
    // transformRequest: [(data) => JSON.stringify(data.data)],
    // headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'Acces-Control-Allow-Origin': '*'
    // }
});

export default instance;