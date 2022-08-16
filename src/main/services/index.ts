import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import store from "store";

const baseUrl = process.env.REACT_APP_API_URL;

const http = axios.create({
  baseURL: baseUrl,
});

//get the access token set in reducer
http.interceptors.request.use((_req: AxiosRequestConfig) => {
  const { access_token } = store.getState().user;
  _req.headers = {
    ..._req.headers,
    Authorization: `Bearer ${access_token} `,
  };
  return _req;
});

/**
 * TODO: show toast on request failutre
 */
http.interceptors.response.use((_res: AxiosResponse) => {
  return _res;
});
/**
 * TODO: handle timeout
 */
http.interceptors.response.use((_res: AxiosResponse) => {
  return _res;
});

export default http;
