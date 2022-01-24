import axios from "axios";

export class BaseApi {
  get = (url) => {
    return axios.get(url, { headers: headers });
  };
  delete = (url) => {
    return axios.delete(url, { headers: headers });
  };
  put = (url, data) => {
    return axios.put(url, data, {
      headers: headers,
    });
  };
  post = (url, data) => {
    return axios.post(url, data, {
      headers: headers,
    });
  };
}
