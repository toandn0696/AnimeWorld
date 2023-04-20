import axios from 'axios';
// import Config from 'react-native-config';
// import LocalStorage from '../common/LocalStorage';
// import {Strings} from '../common/Strings';

const APIClient = axios.create({
  baseURL: 'https://api.consumet.org/anime/gogoanime/',
  timeout: 60000,
  headers: {
    'User-Agent': 'SOS/Android/1.0.0/Samsung-S7',
    'Accept-Language': 'en',
  },
});

//TODO: Handle request interceptor
// API.interceptors.request.use(async config => {
//   const accessToken = await LocalStorage.getValueItem(Strings.ACCESS_TOKEN);
//   console.log(`accessToken ${accessToken}`);
//   config.headers = config.headers ?? {};

//   if (accessToken != null || accessToken != undefined) {
//     config.headers = {
//       'User-Agent': 'SOS/Android/1.0.0/Samsung-S7',
//       'Accept-Language': 'en',
//       'Content-type': 'application/json',
//       Authorization: accessToken,
//     };
//   } else {
//     config.headers = {
//       'User-Agent': 'SOS/Android/1.0.0/Samsung-S7',
//       'Accept-Language': 'en',
//     };
//   }
//   console.log('Log request:' + JSON.stringify(config, null, 2));
//   return config;
// });

APIClient.interceptors.response.use(
  function (response) {
    console.log(`sucess: ${response.status}`);
    let data = response.data;
    let dataJson = '';
    if (data.data != undefined) {
      dataJson = JSON.stringify(data.data);
    } else {
      dataJson = JSON.stringify(data);
    }
    // return data.data != undefined ? JSON.parse(data.data) : JSON.parse(data);
    return JSON.parse(dataJson);
  },
  function (error) {
    console.log(`failure: ${error}`);
    //Handle Common Error
    if (error.response.status === 401) {
    }
  },
);

export default APIClient;
