import axios from 'axios';
const baseHeader = {
  Accept: 'application/json',
};

export const handleError = error => {
  if (error && error.response && (error.response.status === 401 || error.response.status === 418)) {
    console.log("Not authorised")
  } else if (error && error.response && error.response.status === 403) {
    console.log("Access Denied")
  }
  return true;
};

export default (
  method,
  endpoint,
  data,
  extraOptions = null,
) => {
  let options = {
    url: endpoint,
    method,
    protocol: 'https:',
    data,
    headers: baseHeader,
    timeout: 60000,
  };
  if (extraOptions) {
    delete extraOptions.url;
    delete extraOptions.method;
    delete extraOptions.data;
    options = { ...options, ...extraOptions };
  }
  const axiosInstance = axios(options).catch(error => {
    handleError(error);
    return Promise.reject(error);
  });

  return axiosInstance;
};
